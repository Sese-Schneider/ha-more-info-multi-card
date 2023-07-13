export interface MoreInfoMultiEntity {
    entity: string;
    title?: string;
}

export interface MoreInfoMultiConfig {
    type: string;
    entities: Array<MoreInfoMultiEntity>;
    display_state?: boolean;
    display_title?: boolean;
}
