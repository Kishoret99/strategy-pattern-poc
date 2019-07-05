export interface Payload {
    entity: string,
    response: string
}

export abstract class BluetoothService {

    constructor() { }

    send(data: string) {
        const payload: Payload = {
            entity: data,
            response: 'sent'
        }
        setTimeout(() => {this.handleSendResponse(payload)}, 1500)
    }

    handleSendResponse(payload: Payload) {
        this.sentSuccess(payload);
    }

    currentEntity(payload: Payload) {
        return payload.entity.toUpperCase();
    }

    abstract sentSuccess(payload);
}