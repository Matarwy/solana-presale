import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { PresaleDapp } from "../target/types/presale_dapp";

describe("presale_dapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.PresaleDapp as Program<PresaleDapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
