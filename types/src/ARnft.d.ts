import { ConfigData } from "./config/ConfigData";
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
interface Entity {
    name: string;
    markerUrl: string;
}
export default class ARnft {
    cameraView: CameraViewRenderer;
    appData: ConfigData;
    width: number;
    height: number;
    configUrl: string;
    listeners: object;
    markerUrl: string;
    camData: string;
    private controllers;
    private static entities;
    private target;
    private uuid;
    private version;
    private _fps;
    private _lastTime;
    constructor(width: number, height: number, configUrl: string);
    static init(width: number, height: number, markerUrls: Array<string>, names: Array<string>, configUrl: string, stats: boolean): Promise<object>;
    static initWithEntities(width: number, height: number, entities: Entity[], configUrl: string, stats: boolean): Promise<object>;
    private _initialize;
    setFPS(value: number): void;
    static getEntities(): Entity[];
    private _update;
    dispose(): void;
    disposeNFT(): void;
    disposeVideoStream(): void;
}
export {};
