import { Keplr } from "@keplr-wallet/types";
import { noisChainConfig, junoChainConfig } from "../services/noisConfig";

export function convertFromMicroDenom(denom: string) {
  return denom?.substring(1).toUpperCase();
}

declare global {
  interface Window {
    keplr: Keplr | undefined;
  }
}

let keplr: Keplr | undefined;

export async function getKeplr(): Promise<Keplr> {
  let gotKeplr: Keplr | undefined;

  if (keplr) {
    gotKeplr = keplr;
  } else if (window.keplr) {
    gotKeplr = window.keplr;
  } else if (document.readyState === "complete") {
    gotKeplr = window.keplr;
  } else {
    gotKeplr = await new Promise((resolve) => {
      const documentStateChange = (event: Event) => {
        if (
          event.target &&
          (event.target as Document).readyState === "complete"
        ) {
          resolve(window.keplr);
          document.removeEventListener("readystatechange", documentStateChange);
        }
      };

      document.addEventListener("readystatechange", documentStateChange);
    });
  }

  if (!gotKeplr) throw new Error("Keplr not found");
  if (!gotKeplr) keplr = gotKeplr;

  return gotKeplr;
}


export async function suggestChain(): Promise<void> {
  const keplr = await getKeplr();
  await keplr.experimentalSuggestChain(junoChainConfig);
}