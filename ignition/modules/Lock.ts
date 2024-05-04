import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Lock", (m) => {

    const deployer_index = 9;
    const deployer = m.getAccount(deployer_index);

    console.log("deployer_index =", deployer_index);
    console.log("deployer =", deployer);

    const user1 = m.getAccount(1);

    const lock = m.contract("Lock", [3600], {
        from: deployer,
    });

    return { lock };
});