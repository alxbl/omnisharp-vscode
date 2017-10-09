import * as vscode from 'vscode';

export class DockerOptions {
    constructor(public enabled: boolean,
        public image: string,
        public containerName: string,
        public args: string[]) { }

    public static Read(): DockerOptions {
        const omnisharpConfig = vscode.workspace.getConfiguration('omnisharp');
        const enabled = omnisharpConfig.get<boolean>('docker.enabled', false);
        const image = omnisharpConfig.get<string>('docker.image', 'alxbl/omnisharp-roslyn');
        const cname = omnisharpConfig.get<string>('docker.containerName', 'omnisharp_vscode_svc');
        return new DockerOptions(enabled, image, cname, []);
    }
}
