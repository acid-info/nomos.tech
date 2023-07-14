---
title: Description and architecture
sidebar_position: 2
---

Nomos was designed to serve as the trustless agreements layer for emerging network states, providing a key piece of infrastructure to the Logos tech stack. We believe that such a network must maintain the following properties:

- **Maximum decentralisation:** Nomos is designed to place minimum resource demands on validators, ensuring that those without access to powerful hardware can participate. With the network maximally accessible, greater numbers of users can join as full peers, strengthening Nomos from a security perspective.

- **Multi-chain ecosystem:** Nomos' multi-chain architecture is designed to support multiple heterogeneous network states with their own rules, or even desires for independence. In addition to extending greater sovereignty to the network states on Nomos, this approach enables unlimited horizontal scaling.

- **Isolated performance trade-offs:** Nomos will provide a means for customizable execution environments in which trade-offs can be made to achieve performance enhancements such as high transaction throughput.

- **Privacy-centric:** We believe privacy is essential for the self-determination and sovereignty of aspiring network states. Consequently, Nomos has been designed to protect user privacy at the network level, and in such a way as to enable the integration of new privacy techniques as they become available.

### Design space

To achieve the above, Nomos is developing an underexplored area in the design space between Ethereum, Cosmos, Polkadot, and newer systems like Celestia and Anoma.

Ethereum pioneered the concept of a blockchain network capable of smart contract execution, ushering in an ongoing era of monetary and organisational experimentation. Yet, it is vulnerable to various centralising forces. Furthermore, while its rollup-centric approach to scaling has the potential for decentralisation, most rollups today rely on centralised sequencers, and inter-rollup communication presents its own complications. While Nomos is inspired by Ethereum in many ways, these limitations make Ethereum ill-suited for our vision of a network of network states.

App-chain ecosystems like Cosmos and Polkadot offer an alternative architecture but introduce their own challenges. Examples include bootstrapping sufficient participants to ensure the economic security of multiple independent chains, and addressing the asynchronous nature of cross-chain protocols. While Polkadot's shared security model offers something of a solution, the network fails to enable easy, permissionless participation and its parachains cannot be considered fully sovereign.

Meanwhile, Anoma's fractal approach to scaling maintains decentralisation while providing flexibility and customizability closer to our vision for Nomos. However, the approach is still to be tested widely by real-world applications, which will surely produce its own challenges. Finally, Nomos implements insights from Celestia's architecture in its approach to communication, sovereignty, and scalability.

<br />

### Network architecture

Nomos consists of three layers—the Base Layer, Coordination Layer, and Execution Zones. Each has a specific role that contributes to the system's functionality and performance.

<br />

**Base Layer**

Nomos' Base Layer focuses exclusively on consensus, data availability, and decentralisation, with the goal of ensuring stability, security, and scalability for the rest of the network. No execution or validation is performed at the Base Layer, as functions requiring access to state cannot be as reliably decentralised as consensus and data availability.

The Carnot consensus protocol is crucial to ensuring high performance as the network scales from a few validators to tens of thousands. A forthcoming paper covers Carnot in greater detail. 

Alongside ensuring maximum decentralisation, the Base Layer also strives to make data availability scalable. It achieves this by:

- Reducing the amount of computation validators need by minimising  or eliminating block execution or verification from the Base Layer.

- Reducing the amount of data light clients need to download through Data Availability Sampling.

- Reducing data redundancy in the network via sharding techniques that decouple data stored on the blockchain from the data that a single node needs to process and store.

<br />

**Coordination Layer**

Above the Base Layer is the Coordination Layer. The Coordination Layer's aim is to support functions common across all Execution Zones. To ensure maximum decentralisation, these functions are kept to the bare minimum, since everything on the Coordination Layer must be downloaded and verified by all validators. 

The Coordination Layer provides the following functions only:

- **Verification of ZK proofs:** The Coordination Layer's ability to verify ZK proofs facilitates powerful bridging capabilities, including private deposits and withdrawals between the Coordination Layer and Execution Zones, inter-Execution Zone private transfers, and generalised use cases.

- **Message passing between Execution Zones:** The Coordination Layer enables Execution Zones to communicate asynchronously with each other. Such messaging is a powerful feature but not entirely trustless—as detailed in the forthcoming Nomos whitepaper.

- **Special operations, such as those relating to the creation of new Execution Zones:** Initially, these special operations are limited to initiating new Execution Zones and the creation of a new zone's genesis block.  

- **Censorship resistance:** Censorship resistance is an emergent property of the above features, enabling any user to "exit" an execution zone by submitting transactions to the Coordination Layer directly. This is particularly powerful in the event that an Execution Zone attempts to censor a user's actions.

<br />

**Execution Zones**

The Base and Coordination Layers support a third layer of Execution Zones. Execution Zones provide the following properties: 

- Share liquidity with the entire Nomos network.

- Configurable latency reduction.

- Configurable throughput increases.

- Adaptability to specific applications and use cases.

Execution Zones are most easily thought of as virtual sidechains that share the same global data availability space. Transactions associated with an Execution Zone are only processed by that zone's validators. However, unlike traditional sidechains, all applications on Nomos share the same blockchain, and data availability is uniformly ensured by the global Nomos network.

This architecture makes Execution Zones more powerful than traditional sidechains as they:

- Use trust-minimised bridging for communication. 

- Can access each other's transactions securely. 

- Share liquidity across the network. 

- Enable improved security via restaking. 

Execution Zones exist to satisfy a wide range of application requirements that may demand far greater performance characteristics than what a highly decentralised, monolithic blockchain can achieve before hitting scaling limits. Such applications are often willing to make compromises in terms of security or decentralisation to achieve higher performance. By combining the elastic consensus algorithm Carnot with a restaking mechanism and flexible execution models, Nomos grants a high degree of Execution Zone adaptability.

![architect.png](/subpages/architect.png)
