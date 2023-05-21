import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Auth0Provider
		domain="dev-37zrm1dl17wcqjpe.us.auth0.com"
		clientId="zrZxHM4K39S59FKh2Jo4UAnIMed1BQ1A"
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}>
		{/* redirectUri={window.location.origin + "/home"} */}
		<ThirdwebProvider desiredChainId={ChainId.Goerli}>
			<Router>
				<StateContextProvider>
					<App />
				</StateContextProvider>
			</Router>
		</ThirdwebProvider>
	</Auth0Provider>
);
