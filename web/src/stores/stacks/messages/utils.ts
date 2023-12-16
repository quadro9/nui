
export interface HistoryMessage {
	id: string
	timestamp: number
	title: string
	body?: string
	json?: any
	height?: number
}

export enum PARAMS_MESSAGES {
	CONNECTION_ID = "cid",
}

export enum MSS_TYPES {
	JSON = "json",
	BASE64 = "base64",
	HEX = "hex",
	TEXT = "text",
}