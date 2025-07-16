---
title: Description and Architecture
sidebar_position: 2
hide_table_of_contents: true
---

Nomos is a blockchain infrastructure that makes it easy to build network states and other decentralised applications. It was designed with the following principles in mind:

- **Privacy:** Nomos must protect information associated with all participants, regardless of their involvement in the network. On the infrastructure level, Nomos nodes must be confident that their block proposals have a very low probability of being traced. Nomos also provides developers with the tools to build applications with programmable privacy, allowing these applications to keep personal data hidden.

- **Neutrality:** Activity on Nomos must be handled in a way that does not compromise the public neutrality of Nomos nodes. This way, nodes can participate in processing transactions without having to make their inclusion public. If a Nomos-native application attempts to censor a user by excluding their transactions, Nomos provides a fallback path to ensure that the transaction is included.

- **Resilience:** Nomos must remain operational and protect privacy in the face of complex geopolitical scenarios, surviving challenges like a partitioned internet, heavy censorship, and hostile government action. To attract validators and reduce points of failure, running a Nomos node even on a laptop must be easy and straightforward. Scaling to accommodate as many nodes as possible is best accomplished with a consensus protocol that prioritises liveness, resulting in a network that continues operating even in the worst of conditions.

## Network Architecture

Nomos is implemented as two blockchain layers. Applications can be built on lightweight, permissionless blockchains known as **Zones**, which are built on top of a solid base layer foundation known as **Bedrock**. Nomos’ Bedrock and its associated **Services**, together with the Nomos Zones, is known as the **Nomos Network**.

For detailed, up-to-date descriptions of how all these components work, take a look at our [official specifications](https://nomos-tech.notion.site/project). For a more high-level overview, see below.

<br/>


<!-- use HTML image tag and add caption: The Nomos architecture diagram. -->
<div>
  <img src="/subpages/nomos-architecture.webp" alt="Nomos Architecture" />
  <p style={{ marginTop: '12px' }}><em>The Nomos architecture diagram.</em></p>
</div>

<br />

### Bedrock

**Bedrock** is a large-scale validator network that serves as the foundational layer of Nomos, providing consensus and lightweight verification to Nomos Zones. Its Private Proof of Stake (PPoS) consensus protocol ensures block proposers retain their privacy, while remaining scalable, resilient, and accessible Bedrock verifies proofs sent by Zones to ensure that they are operating correctly, and facilitates app privacy and interoperability.

Serving as a Bedrock validator is as simple as having the Nomos node application run in the background on a laptop, with a “set it and forget it” approach to maintenance. This design makes it easy to contribute to the security, consensus, and interoperability of the Nomos Network. A user may instead choose to run a **light node**, allowing them to independently verify the state of the network with even less hardware resources. In fact, light nodes can even run on a mobile phone or a browser wallet.

## Bedrock Services

While Bedrock provides the core functionality, more advanced features are provided by the **Nomos Bedrock Services**. Nomos uses these Services to provide data scalability, network-level privacy for consensus, and executors that ensure Zones remain live by updating their state. While these Services are important for ensuring that Nomos can operate under the most adversarial conditions, Bedrock can still operate without them if necessary. Node operators who choose to participate in providing Bedrock Services are expected to have increased hardware requirements compared to the minimal ones necessary for Bedrock validation.

## Zones

Nomos is primarily designed for applications on **Zones**, which together form the **Native Execution Space**. Zones rely on Bedrock to the fullest extent, thereby benefiting from the collective security of the entire Nomos Network. From a user’s perspective, Zones are deeply interconnected environments that require virtually no setup and maintenance by developers - a result of their common structure and strong interoperability. They are also totally permissionless, with any Nomos user having the ability to keep a Zone live by serving as its executor. Despite this, Zones are resistant to censorship, ensuring that users will always have the option to exit a Zone if they so desire.

## Other Ways to Build on Nomos

Despite the advantages of Zones, they are not suitable for all applications. Nomos also provides support and unique features for **Sovereign Rollups**. These rollups are fully independent, without any restrictions imposed by Bedrock. This sovereign model provides greater freedom and customisability in creating a chain, allowing creators to maximise properties like performance at the expense of the neutrality and interoperability available on Zones.