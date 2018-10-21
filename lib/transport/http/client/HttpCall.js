import Response from '../../jsonrpc/Response';

export default class HttpCall {
	constructor(httpCall, converter) {
		this.httpCall = httpCall;
		this.converter = converter;
	}

	execute(callback) {
		const async = !!callback;
		if (!async) {
			return new Response(this.httpCall.execute(), this.converter);
		}

		this.httpCall.enqueue(callback);
		return undefined;
	}
}