export type MissionStatus = 'unannounced' | 'announced' | 'confirmed';

export interface Mission {
    name: string;
    status: MissionStatus;
}