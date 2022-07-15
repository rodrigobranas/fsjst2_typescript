const keyboard = {
	keys: 100,
	connectionType: "usb"
} as const;

keyboard.connectionType = "ps2";

console.log(keyboard);