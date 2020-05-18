export interface AuthData {
  tunnels: HttpTunnel[];
  authenticated: {
    publicKey: string;
  };
}

export interface HttpTunnel {
  domain: string;
}
