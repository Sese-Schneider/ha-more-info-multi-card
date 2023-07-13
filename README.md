# More Info Multi Card by [@Sese-Schneider](https://www.github.com/Sese-Schneider)

Display one or multiple more-info dialogs of any entities as a lovelace card.

This card is based on the awesome [more-info-card](https://github.com/thomasloven/lovelace-more-info-card) by [@thomasloven](https://github.com/thomasloven)

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Sese-Schneider&repository=ha-more-info-multi-card&category=frontend)
[![GitHub Release][releases-shield]][releases]
![GitHub Downloads][downloads-shield]

[![License][license-shield]](LICENSE)
![Project Maintenance][maintenance-shield]
[![GitHub Activity][commits-shield]][commits]

**Features:**

- Variable amount of more info dialogs of entities to display
- Option to show or adjust titles
- Option to show the state infos

## Options

| Name          | Type                  | Requirement  | Description                          | Default |
|---------------|-----------------------|--------------|--------------------------------------|---------|
| type          | string                | **Required** | `custom:more-info-multi-card`        |         |
| entities      | Array<MoreInfoEntity> | **Required** | List of entities (see below)         |         |
| display_title | boolean               | *Optional*   | Whether to display the entity titles | true    |
| display_state | boolean               | *Optional*   | Whether to display the entity states | false   |

#### MoreInfoEntity
| Name   | Type         | Requirement  | Description                    | Default |
|--------|--------------|--------------|--------------------------------|---------|
| entity | state entity | **Required** | State entity                   |         |
| title  | string       | *Optional*   | Overwrite for the entity title |         |


### Example configuration
```yaml
type: custom:more-info-multi-card
display_title: false
display_state: false
entities:
  - entity: light.living_room_light_1
  - entity: light.living_room_light_2
  - entity: light.living_room_light_3
```

## Install

### HACS

*This repo can be installed as a custom repository in HACS.*

* Go to HACS → Frontend
* Click on the three-dot-menu → Custom repositories
* Add `Sese-Schneider/ha-more-info-multi-card` as Lovelace.
* Use the FAB "Explore and download repositories" to search "More Info Multi Card".

_or_

Click here:

[![](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Sese-Schneider&repository=ha-more-info-multi-card&category=frontend)


### Simple install

* Download and copy `more-info-multi-card.js` from the
  latest [release](https://github.com/Sese-Schneider/ha-more-info-multi-card/releases/latest) into your `config/www`
  directory.
* Add a reference to `more-info-multi-card.js` as JavaScript-Module to your Lovelace dashboard via "Manage Resources". (
  Note: You have to enable advanced mode)
  

[Troubleshooting](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins)



[commits-shield]: https://img.shields.io/github/commit-activity/y/Sese-Schneider/ha-more-info-multi-card.svg?style=for-the-badge

[downloads-shield]: https://img.shields.io/github/downloads/Sese-Schneider/ha-more-info-multi-card/total.svg?style=for-the-badge

[commits]: https://github.com/Sese-Schneider/ha-more-info-multi-card/commits/main

[license-shield]: https://img.shields.io/github/license/Sese-Schneider/ha-more-info-multi-card.svg?style=for-the-badge

[maintenance-shield]: https://img.shields.io/maintenance/yes/2023.svg?style=for-the-badge

[releases-shield]: https://img.shields.io/github/release/Sese-Schneider/ha-more-info-multi-card.svg?style=for-the-badge

[releases]: https://github.com/Sese-Schneider/ha-more-info-multi-card/releases
