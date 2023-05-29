import { MsgExecuteContractEncodeObject, WasmExtension } from "@cosmjs/cosmwasm-stargate";
import { QueryClient } from "@cosmjs/stargate";
import { Coin } from "@keplr-wallet/types";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";

const AirdropContractAddress = "juno140p2gyzfq7h0n36x8ldzcytjqtm5cj654gr9ema8sz8au2xf82nq9qvzez";


export const claimAirdropMessage = ({
  sender,
  amount,
  proof
}:{
  sender: string;
  amount: string;
  proof: string[];
}, funds?: Coin[]): MsgExecuteContractEncodeObject => {
  return {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
    value: MsgExecuteContract.fromPartial({
      sender: sender,
      contract: AirdropContractAddress,
      msg: toUtf8(JSON.stringify({
        claim: {
          amount,
          proof,
        },
      })),
      funds
    })
  };
}

export interface ClaimedProps {
  walletAddress: string,
  batchClient: QueryClient & WasmExtension,
}

export const checkClaimed = async ({walletAddress, batchClient}: ClaimedProps) => {

  const res = await batchClient?.wasm.queryContractSmart(
    AirdropContractAddress,
    {
      is_claimed: {
        address: walletAddress
      }
    }
  );
  return res.is_claimed as boolean;
}

export const isLucky = async ({walletAddress, batchClient}: ClaimedProps) => {
  const res = await batchClient.wasm.queryContractSmart(
    AirdropContractAddress,
    {
      is_lucky: {
        address: walletAddress
      }
    }
  );
  return res.is_lucky as boolean;
}