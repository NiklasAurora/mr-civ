export interface Civ {
	country: string;
	leader: string;
	extended: boolean;
	uniques: Unique[];
}

export interface Unique {
	name: string;
	value: string;
}

export interface Map {
	types: string[];
	size: string[];
	cityStates: MinMaxObject;
	gamePace: string[];
	worldAge: string[];
	temperature: string[];
	rainfall: string[];
	seaLevel: string[];
	naturalWonders: MinMaxObject;
	grassMoisture: string[];
	rivers: string[];
	tundra: string[];
	landSizeX: MinMaxObject;
	landSizeY: MinMaxObject;
	resourceAmount: MinMaxObject;
	islands: MinMaxObject;
	lakes: string[];
}

export interface MinMaxObject {
	min: number;
	max: number;
}
