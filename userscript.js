const sock = new WebSocket("wss://mppclone.com:8443");
sock.onopen = () => sock.send(JSON.stringify([{m: "hi"}]));
