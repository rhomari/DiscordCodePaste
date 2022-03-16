
const vscode = require('vscode');


// By Tariq Rhomari the 16/03/2022
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
vscode
	
	
	
	
	let disposable = vscode.commands.registerCommand('DiscordCodePaste.CopyInDiscordCodeFormat', function () {
		
		const activeEditor =vscode.window.activeTextEditor;
		const selectedText = activeEditor.document.getText(activeEditor.selection);
		const language = activeEditor.document.languageId;
		
		vscode.env.clipboard.writeText("```" + language  + "\n" + selectedText +  "```")
		vscode.window.showInformationMessage("Your code has been copied to systeme clipboard.");
	});

	context.subscriptions.push(disposable);
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
