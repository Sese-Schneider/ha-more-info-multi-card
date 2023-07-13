import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import { version } from "../package.json";
import { CARD_NAME } from "./const";
import { MoreInfoMultiConfig, MoreInfoMultiEntity } from "./types";

const DOMAINS_NO_INFO = ["camera", "configurator"];
const DOMAINS_NO_MORE_INFO = [
  "input_number",
  "input_select",
  "input_text",
  "number",
  "scene",
  "select",
];

@customElement(CARD_NAME)
class MoreInfoCard extends LitElement {
  @property() public hass?: HomeAssistant;

  @state() private _config?: MoreInfoMultiConfig;

  setConfig(config) {
    if (!config) {
      throw new Error("Invalid configuration");
    }
    if (!config.entities) throw new Error('At least one entity is required.');

    this._config = config;

    const domains: Array<String> = config.entities.map((entity: MoreInfoMultiEntity) => entity.entity.split(".")[0]);
    (window as any).loadCardHelpers().then((helpers: any) => {
      domains.forEach((domain) => helpers.importMoreInfoControl(domain));
    });
  }

  render() {
    if (!this._config || !this.hass) {
      return nothing;
    }

    const displayStateInfo = this._config.display_state !== false;
    const displayTitle = this._config.display_title !== false;

    const elements = this._config.entities.map((entity) => {
      const stateObj = this.hass!.states[entity.entity];
      const name = stateObj.attributes.friendly_name === undefined
        ? stateObj.entity_id.split(".")[1].replace(/_/g, " ")
        : stateObj.attributes.friendly_name;

      const domain = entity.entity.split(".")[0];

      return html`
      <div>
          ${displayTitle
          ? html`<h1 class="card-header">${entity.title || name}</h1>`
          : html`<div style="height: 24px"></div>`}

          <div class="card-content">
            ${DOMAINS_NO_MORE_INFO.includes(domain)
          ? html` No More Info Available `
          : html`${DOMAINS_NO_INFO.includes(domain)
            ? ""
            : html`
              ${displayStateInfo
                ? html`<state-card-content
                            .stateObj=${stateObj}
                            .hass=${this.hass}></state-card-content>`
                : ""}
          `}
              <more-info-content
                .hass=${this.hass}
                .stateObj=${stateObj}
              ></more-info-content>
            `}
          </div>
        </div>
    `;
    });

    return html`
      <ha-card style="display: flex; justify-content: space-around;">
        ${elements}
      </ha-card>
    `;
  }
}

// eslint-disable-next-line no-console
console.info(
  `%c${CARD_NAME} (${version}) is installed`,
  "color: #33b4ff; font-weight: bold",
  "",
);
