const questions = [
    // Parte 1: Descreva conceitos de computação em nuvem (25-30%)
    {
      category: "Descreva conceitos de computação em nuvem (25–30%)",
      question: "Descreva o que é computação em nuvem.",
      options: [
        "a) Computação em nuvem é uma tecnologia que permite o acesso a recursos de computação pela internet.",
        "b) Computação em nuvem é uma tecnologia que permite o acesso a recursos de computação apenas por meio de redes locais.",
        "c) Computação em nuvem é uma tecnologia que permite o acesso a recursos de computação apenas por meio de servidores locais.",
        "d) Computação em nuvem é uma tecnologia que permite o acesso a recursos de computação apenas por meio de dispositivos móveis.",
      ],
      answer: 0,
      explanation: "A opção 'a' está correta. A computação em nuvem é uma tecnologia que oferece acesso a recursos de computação, como servidores, armazenamento e aplicativos, pela internet, sem que seja necessário ter esses recursos fisicamente em sua própria infraestrutura."
    },
    {
      category: "Descreva conceitos de computação em nuvem (25–30%)",
      question: "Explique o modelo de responsabilidade compartilhada na nuvem.",
      options: [
        "a) O modelo de responsabilidade compartilhada na nuvem é um modelo onde o provedor de nuvem é totalmente responsável por garantir a segurança dos dados e aplicativos do usuário.",
        "b) O modelo de responsabilidade compartilhada na nuvem é um modelo onde o usuário é totalmente responsável por garantir a segurança dos dados e aplicativos na nuvem.",
        "c) O modelo de responsabilidade compartilhada na nuvem é um modelo onde tanto o provedor de nuvem quanto o usuário têm responsabilidades compartilhadas na segurança dos dados e aplicativos.",
        "d) O modelo de responsabilidade compartilhada na nuvem é um modelo onde o provedor de nuvem é responsável apenas pelo armazenamento dos dados, e o usuário é responsável por tudo o mais.",
      ],
      answer: 2,
      explanation: "A opção 'c' está correta. No modelo de responsabilidade compartilhada na nuvem, tanto o provedor de nuvem quanto o usuário têm responsabilidades compartilhadas na segurança dos dados e aplicativos. O provedor de nuvem é responsável pela segurança da infraestrutura da nuvem, enquanto o usuário é responsável pela segurança de seus dados e aplicativos na nuvem."
    },
    {
      category: "Descreva conceitos de computação em nuvem (25–30%)",
      question: "Defina os modelos de nuvem, incluindo público, privado e híbrido.",
      options: [
        "a) Nuvem pública é um modelo onde os recursos de computação são compartilhados por várias organizações, nuvem privada é um modelo onde os recursos são dedicados a uma única organização, e nuvem híbrida é uma combinação de nuvem pública e privada.",
        "b) Nuvem pública é um modelo onde os recursos de computação são dedicados a uma única organização, nuvem privada é um modelo onde os recursos são compartilhados por várias organizações, e nuvem híbrida é uma combinação de nuvem pública e privada.",
        "c) Nuvem pública é um modelo onde os recursos de computação são compartilhados por várias organizações, nuvem privada é um modelo onde os recursos são compartilhados por uma única organização, e nuvem híbrida é uma combinação de nuvem pública e privada.",
        "d) Nuvem pública é um modelo onde os recursos de computação são dedicados a uma única organização, nuvem privada é um modelo onde os recursos são dedicados a várias organizações, e nuvem híbrida é uma combinação de nuvem pública e privada.",
      ],
      answer: 0,
      explanation: "A opção 'a' está correta. Nuvem pública é um modelo onde os recursos de computação são compartilhados por várias organizações, nuvem privada é um modelo onde os recursos são dedicados a uma única organização, e nuvem híbrida é uma combinação de nuvem pública e privada."
    },
    {
      category: "Descreva conceitos de computação em nuvem (25–30%)",
      question: "Identifique casos de uso apropriados para cada modelo de nuvem.",
      options: [
        "a) Casos de uso apropriados para nuvem pública incluem o processamento de dados altamente sensíveis e confidenciais, enquanto a nuvem privada é mais adequada para cargas de trabalho com picos de tráfego.",
        "b) Casos de uso apropriados para nuvem pública incluem o processamento de dados altamente sensíveis e confidenciais, enquanto a nuvem privada é mais adequada para cargas de trabalho com uso constante de recursos.",
        "c) Casos de uso apropriados para nuvem pública incluem o processamento de dados de uso interno da organização, enquanto a nuvem privada é mais adequada para cargas de trabalho com uso constante de recursos.",
        "d) Casos de uso apropriados para nuvem pública incluem o processamento de dados de uso interno da organização, enquanto a nuvem privada é mais adequada para cargas de trabalho com picos de tráfego.",
      ],
      answer: 1,
      explanation: "A opção 'b' está correta. Casos de uso apropriados para nuvem pública incluem o processamento de dados altamente sensíveis e confidenciais, enquanto a nuvem privada é mais adequada para cargas de trabalho com uso constante de recursos."
    },
    {
      category: "Descreva conceitos de computação em nuvem (25–30%)",
      question: "Descreva o modelo de consumo baseado em uso na nuvem.",
      options: [
        "a) O modelo de consumo baseado em uso na nuvem é um modelo onde os recursos de computação são fornecidos gratuitamente, e o usuário só paga quando excede o uso gratuito.",
        "b) O modelo de consumo baseado em uso na nuvem é um modelo onde os recursos de computação são fornecidos de acordo com a demanda do usuário, e o usuário paga apenas pelo que utiliza.",
        "c) O modelo de consumo baseado em uso na nuvem é um modelo onde os recursos de computação são fornecidos por um valor fixo mensal, independentemente do uso.",
        "d) O modelo de consumo baseado em uso na nuvem é um modelo onde os recursos de computação são fornecidos por um valor fixo anual, independentemente do uso.",
      ],
      answer: 1,
      explanation: "A opção 'b' está correta. No modelo de consumo baseado em uso na nuvem, os recursos de computação são fornecidos de acordo com a demanda do usuário, e o usuário paga apenas pelo que utiliza."
    },
    {
      category: "Descreva conceitos de computação em nuvem (25–30%)",
      question: "Compare os modelos de preços de nuvem.",
      options: [
        "a) Os modelos de preços de nuvem incluem apenas o modelo de pagamento por uso e o modelo de pagamento fixo.",
        "b) Os modelos de preços de nuvem incluem apenas o modelo de pagamento por uso e o modelo de assinatura.",
        "c) Os modelos de preços de nuvem incluem o modelo de pagamento por uso, o modelo de assinatura e o modelo de pagamento por recurso.",
        "d) Os modelos de preços de nuvem incluem o modelo de pagamento por uso, o modelo de assinatura e o modelo de pagamento fixo.",
      ],
      answer: 2,
      explanation: "A opção 'c' está correta. Os modelos de preços de nuvem incluem o modelo de pagamento por uso, o modelo de assinatura e o modelo de pagamento por recurso, onde o usuário paga apenas pelo que utiliza, paga um valor fixo regularmente ou paga por recursos específicos utilizados, respectivamente."
    },
    {
      category: "Descreva conceitos de computação em nuvem (25–30%)",
      question: "Descreva o que é computação sem servidor (serverless).",
      options: [
        "a) Computação sem servidor é um modelo onde não há servidores físicos envolvidos, e todo o processamento é feito por dispositivos móveis.",
        "b) Computação sem servidor é um modelo onde não há servidores físicos envolvidos, e o fornecedor de nuvem é responsável por todo o gerenciamento da infraestrutura.",
        "c) Computação sem servidor é um modelo onde não há servidores físicos envolvidos, e o usuário é responsável por todo o gerenciamento da infraestrutura.",
        "d) Computação sem servidor é um modelo onde não há servidores físicos envolvidos, e o processamento é feito por dispositivos locais.",
      ],
      answer: 1,
      explanation: "A opção 'b' está correta. Computação sem servidor (serverless) é um modelo onde não há servidores físicos envolvidos, e o fornecedor de nuvem é responsável por todo o gerenciamento da infraestrutura, incluindo o dimensionamento automático e a alocação de recursos, permitindo que o usuário foque apenas na lógica do aplicativo sem se preocupar com a infraestrutura subjacente."
    },
    {
      category: "Descreva conceitos de computação em nuvem (25–30%)",
      question: "Liste os benefícios do uso de serviços em nuvem.",
      options: [
        "a) Os benefícios do uso de serviços em nuvem incluem maior controle sobre a infraestrutura, menor flexibilidade e custos mais altos.",
        "b) Os benefícios do uso de serviços em nuvem incluem menor controle sobre a infraestrutura, maior flexibilidade e custos mais altos.",
        "c) Os benefícios do uso de serviços em nuvem incluem maior controle sobre a infraestrutura, maior flexibilidade e custos mais baixos.",
        "d) Os benefícios do uso de serviços em nuvem incluem menor controle sobre a infraestrutura, menor flexibilidade e custos mais baixos.",
      ],
      answer: 2,
      explanation: "A opção 'c' está correta. Os benefícios do uso de serviços em nuvem incluem maior controle sobre a infraestrutura, maior flexibilidade para dimensionar recursos conforme a demanda e custos mais baixos, pois o usuário paga apenas pelo que utiliza."
    },
    {
      category: "Descreva conceitos de computação em nuvem (25–30%)",
      question: "Descreva os benefícios de alta disponibilidade e escalabilidade na nuvem.",
      options: [
        "a) Alta disponibilidade na nuvem significa que os serviços são altamente disponíveis apenas para usuários em uma localização específica, enquanto escalabilidade na nuvem significa que a capacidade dos serviços pode ser ajustada conforme necessário.",
        "b) Alta disponibilidade na nuvem significa que os serviços são altamente disponíveis para todos os usuários, independentemente da localização, enquanto escalabilidade na nuvem significa que a capacidade dos serviços pode ser ajustada conforme necessário.",
        "c) Alta disponibilidade na nuvem significa que os serviços são altamente disponíveis para todos os usuários, independentemente da localização, enquanto escalabilidade na nuvem significa que a capacidade dos serviços é fixa e não pode ser ajustada.",
        "d) Alta disponibilidade na nuvem significa que os serviços são altamente disponíveis apenas para usuários em uma localização específica, enquanto escalabilidade na nuvem significa que a capacidade dos serviços é fixa e não pode ser ajustada.",
      ],
      answer: 1,
      explanation: "A opção 'b' está correta. Alta disponibilidade na nuvem significa que os serviços são altamente disponíveis para todos os usuários, independentemente da localização, enquanto escalabilidade na nuvem significa que a capacidade dos serviços pode ser ajustada conforme necessário, permitindo lidar com picos de tráfego e demanda."
    },
    {
      category: "Descreva conceitos de computação em nuvem (25–30%)",
      question: "Descreva os benefícios de confiabilidade e previsibilidade na nuvem.",
      options: [
        "a) Confiabilidade na nuvem significa que os serviços são altamente confiáveis e nunca apresentam falhas, enquanto previsibilidade na nuvem significa que o usuário pode prever exatamente quanto irá pagar pelos serviços.",
        "b) Confiabilidade na nuvem significa que os serviços são altamente confiáveis e raramente apresentam falhas, enquanto previsibilidade na nuvem significa que o usuário pode prever exatamente quanto irá pagar pelos serviços.",
        "c) Confiabilidade na nuvem significa que os serviços são altamente confiáveis e nunca apresentam falhas, enquanto previsibilidade na nuvem significa que o usuário não pode prever quanto irá pagar pelos serviços.",
        "d) Confiabilidade na nuvem significa que os serviços são altamente confiáveis e raramente apresentam falhas, enquanto previsibilidade na nuvem significa que o usuário não pode prever quanto irá pagar pelos serviços.",
      ],
      answer: 1,
      explanation: "A opção 'b' está correta. Confiabilidade na nuvem significa que os serviços são altamente confiáveis e raramente apresentam falhas, proporcionando uma experiência consistente ao usuário. Previsibilidade na nuvem significa que o usuário pode prever exatamente quanto irá pagar pelos serviços, permitindo um melhor controle de custos."
    },
    {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "Descreva os benefícios de segurança e governança na nuvem.",
        options: [
          "a) Segurança na nuvem garante que todos os dados e serviços estejam completamente protegidos contra qualquer tipo de ameaça, enquanto governança na nuvem se refere ao conjunto de práticas de gerenciamento de dados.",
          "b) Segurança na nuvem garante que todos os dados e serviços estejam protegidos contra ameaças conhecidas, enquanto governança na nuvem se refere ao conjunto de práticas de gerenciamento de recursos.",
          "c) Segurança na nuvem garante que todos os dados e serviços estejam protegidos contra ameaças conhecidas e desconhecidas, enquanto governança na nuvem se refere ao conjunto de práticas de gerenciamento e controle de recursos e políticas.",
          "d) Segurança na nuvem garante que todos os dados e serviços estejam protegidos contra ameaças conhecidas e desconhecidas, enquanto governança na nuvem se refere ao conjunto de práticas de gerenciamento de dados e aplicativos.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. Segurança na nuvem garante que todos os dados e serviços estejam protegidos contra ameaças conhecidas e desconhecidas, proporcionando um ambiente seguro. Governança na nuvem se refere ao conjunto de práticas de gerenciamento e controle de recursos e políticas para garantir o uso adequado dos recursos e conformidade com as políticas da organização."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "Descreva os benefícios de gerenciabilidade na nuvem.",
        options: [
          "a) Gerenciabilidade na nuvem se refere à facilidade de gerenciamento de recursos físicos, enquanto a nuvem garante a disponibilidade e escalabilidade de serviços.",
          "b) Gerenciabilidade na nuvem se refere à facilidade de gerenciamento de recursos virtuais, enquanto a nuvem garante a disponibilidade e escalabilidade de serviços.",
          "c) Gerenciabilidade na nuvem se refere à facilidade de gerenciamento de recursos físicos e virtuais, enquanto a nuvem garante a disponibilidade e escalabilidade de serviços.",
          "d) Gerenciabilidade na nuvem se refere à facilidade de gerenciamento de recursos físicos e virtuais, enquanto a nuvem garante a segurança e disponibilidade de serviços.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. Gerenciabilidade na nuvem se refere à facilidade de gerenciamento de recursos físicos e virtuais, proporcionando uma experiência simplificada para administradores e permitindo o controle eficiente dos recursos. A nuvem garante a disponibilidade e escalabilidade de serviços, permitindo que as cargas de trabalho sejam ajustadas conforme necessário."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "Descreva os tipos de serviços em nuvem.",
        options: [
          "a) Os tipos de serviços em nuvem incluem apenas infraestrutura como serviço (IaaS), plataforma como serviço (PaaS) e software como serviço (SaaS).",
          "b) Os tipos de serviços em nuvem incluem apenas armazenamento em nuvem, aplicativos em nuvem e recursos em nuvem.",
          "c) Os tipos de serviços em nuvem incluem infraestrutura como serviço (IaaS), plataforma como serviço (PaaS), software como serviço (SaaS), funções como serviço (FaaS) e banco de dados como serviço (DBaaS).",
          "d) Os tipos de serviços em nuvem incluem infraestrutura como serviço (IaaS), plataforma como serviço (PaaS), software como serviço (SaaS) e segurança como serviço (SECaaS).",
        ],
        answer: 0,
        explanation: "A opção 'a' está correta. Os tipos de serviços em nuvem incluem infraestrutura como serviço (IaaS), plataforma como serviço (PaaS) e software como serviço (SaaS), que representam diferentes camadas de serviços oferecidos pelos provedores de nuvem."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "Identifique os casos de uso apropriados para infraestrutura como serviço (IaaS).",
        options: [
          "a) Casos de uso apropriados para IaaS incluem a hospedagem de um site estático simples e o desenvolvimento de aplicativos.",
          "b) Casos de uso apropriados para IaaS incluem a hospedagem de um site estático simples e a hospedagem de um banco de dados.",
          "c) Casos de uso apropriados para IaaS incluem a hospedagem de um site dinâmico e a hospedagem de um banco de dados.",
          "d) Casos de uso apropriados para IaaS incluem a hospedagem de um site dinâmico e o desenvolvimento de aplicativos.",
        ],
        answer: 1,
        explanation: "A opção 'b' está correta. Casos de uso apropriados para infraestrutura como serviço (IaaS) incluem a hospedagem de um site estático simples e a hospedagem de um banco de dados, onde o provedor de nuvem fornece recursos de infraestrutura virtualizados, como máquinas virtuais e armazenamento, para que o usuário possa implantar e gerenciar seus aplicativos."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "O que é o modelo de consumo baseado em nuvem?",
        options: [
          "a) O modelo de consumo baseado em nuvem se refere à prática de pagar apenas pelos recursos de nuvem utilizados, sem a necessidade de compromissos de longo prazo.",
          "b) O modelo de consumo baseado em nuvem se refere à prática de pagar uma taxa fixa mensal por recursos de nuvem, independentemente do uso.",
          "c) O modelo de consumo baseado em nuvem se refere à prática de adquirir recursos de nuvem com base em uma licença perpétua.",
          "d) O modelo de consumo baseado em nuvem se refere à prática de pagar antecipadamente por recursos de nuvem com desconto.",
        ],
        answer: 0,
        explanation: "A opção 'a' está correta. O modelo de consumo baseado em nuvem se refere à prática de pagar apenas pelos recursos de nuvem utilizados, sem a necessidade de compromissos de longo prazo. Isso permite que as organizações sejam mais flexíveis e paguem somente pelo que realmente utilizam, evitando gastos desnecessários."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "O que é o modelo de pagamento por uso na nuvem?",
        options: [
          "a) O modelo de pagamento por uso na nuvem é um modelo onde o usuário paga uma taxa fixa mensal pelos recursos de nuvem, independentemente do uso.",
          "b) O modelo de pagamento por uso na nuvem é um modelo onde o usuário paga antecipadamente por recursos de nuvem com desconto.",
          "c) O modelo de pagamento por uso na nuvem é um modelo onde o usuário paga apenas pelos recursos de nuvem utilizados, conforme a demanda.",
          "d) O modelo de pagamento por uso na nuvem é um modelo onde o usuário paga apenas pelos recursos de nuvem não utilizados.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. O modelo de pagamento por uso na nuvem é um modelo onde o usuário paga apenas pelos recursos de nuvem utilizados, conforme a demanda. Isso proporciona uma forma mais eficiente de pagamento, pois o usuário paga somente pelo que realmente utilizou."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "O que é o modelo de assinatura na nuvem?",
        options: [
          "a) O modelo de assinatura na nuvem é um modelo onde o usuário paga uma taxa fixa mensal pelos recursos de nuvem, independentemente do uso.",
          "b) O modelo de assinatura na nuvem é um modelo onde o usuário paga antecipadamente por recursos de nuvem com desconto.",
          "c) O modelo de assinatura na nuvem é um modelo onde o usuário paga apenas pelos recursos de nuvem utilizados, conforme a demanda.",
          "d) O modelo de assinatura na nuvem é um modelo onde o usuário paga apenas pelos recursos de nuvem não utilizados.",
        ],
        answer: 0,
        explanation: "A opção 'a' está correta. O modelo de assinatura na nuvem é um modelo onde o usuário paga uma taxa fixa mensal pelos recursos de nuvem, independentemente do uso. Isso pode proporcionar previsibilidade de custos e facilidade na gestão orçamentária das organizações."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "O que é o modelo de precificação por recurso na nuvem?",
        options: [
          "a) O modelo de precificação por recurso na nuvem é um modelo onde o usuário paga uma taxa fixa mensal pelos recursos de nuvem, independentemente do uso.",
          "b) O modelo de precificação por recurso na nuvem é um modelo onde o usuário paga antecipadamente por recursos de nuvem com desconto.",
          "c) O modelo de precificação por recurso na nuvem é um modelo onde o usuário paga apenas pelos recursos de nuvem utilizados, conforme a demanda.",
          "d) O modelo de precificação por recurso na nuvem é um modelo onde o usuário paga apenas pelos recursos de nuvem não utilizados.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O modelo de precificação por recurso na nuvem é um modelo onde o usuário paga apenas pelos recursos de nuvem utilizados. Isso permite que o usuário tenha mais controle sobre seus gastos, pagando somente pelos recursos que de fato utilizou e evitando desperdício de recursos não utilizados."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "O que é o modelo de precificação por demanda na nuvem?",
        options: [
          "a) O modelo de precificação por demanda na nuvem é um modelo onde o usuário paga uma taxa fixa mensal pelos recursos de nuvem, independentemente do uso.",
          "b) O modelo de precificação por demanda na nuvem é um modelo onde o usuário paga antecipadamente por recursos de nuvem com desconto.",
          "c) O modelo de precificação por demanda na nuvem é um modelo onde o usuário paga apenas pelos recursos de nuvem utilizados, conforme a demanda.",
          "d) O modelo de precificação por demanda na nuvem é um modelo onde o usuário paga apenas pelos recursos de nuvem não utilizados.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. O modelo de precificação por demanda na nuvem é um modelo onde o usuário paga apenas pelos recursos de nuvem utilizados, conforme a demanda. Isso proporciona uma forma mais eficiente de pagamento, pois o usuário paga somente pelo que realmente utilizou, evitando gastos desnecessários."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Microsoft Azure?",
        options: [
          "a) O Microsoft Azure é uma suíte de aplicativos de produtividade que inclui serviços como Word, Excel e PowerPoint.",
          "b) O Microsoft Azure é uma plataforma de computação em nuvem da Microsoft que oferece uma variedade de serviços e recursos para desenvolver, implantar e gerenciar aplicativos em nuvem.",
          "c) O Microsoft Azure é uma solução de segurança cibernética fornecida pela Microsoft para proteger sistemas e redes.",
          "d) O Microsoft Azure é um sistema operacional desenvolvido pela Microsoft para dispositivos móveis.",
        ],
        answer: 1,
        explanation: "A opção 'b' está correta. O Microsoft Azure é uma plataforma de computação em nuvem da Microsoft que oferece uma variedade de serviços e recursos para desenvolver, implantar e gerenciar aplicativos em nuvem, além de fornecer soluções de armazenamento, banco de dados, análise e muito mais."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "Quais são os modelos de implantação no Microsoft Azure?",
        options: [
          "a) O Microsoft Azure oferece apenas um modelo de implantação, que é o modelo de nuvem pública.",
          "b) O Microsoft Azure oferece dois modelos de implantação: nuvem pública e nuvem privada.",
          "c) O Microsoft Azure oferece dois modelos de implantação: nuvem pública e nuvem híbrida.",
          "d) O Microsoft Azure oferece três modelos de implantação: nuvem pública, nuvem privada e nuvem híbrida.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Microsoft Azure oferece três modelos de implantação: nuvem pública, nuvem privada e nuvem híbrida. Nuvem pública é onde os serviços são fornecidos pela internet e acessíveis por qualquer pessoa. Nuvem privada é uma instância do Azure dedicada a uma única organização. Nuvem híbrida é uma combinação de nuvem pública e nuvem privada, permitindo que os dados e aplicativos sejam compartilhados entre elas."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que são regiões do Azure?",
        options: [
          "a) Regiões do Azure são locais físicos onde os datacenters da Microsoft estão localizados.",
          "b) Regiões do Azure são locais geográficos específicos onde os serviços do Azure estão disponíveis.",
          "c) Regiões do Azure são locais geográficos específicos onde os serviços do Azure estão em fase de testes.",
          "d) Regiões do Azure são locais geográficos específicos onde os serviços do Azure são implantados como um ambiente de recuperação de desastres.",
        ],
        answer: 1,
        explanation: "A opção 'b' está correta. Regiões do Azure são locais geográficos específicos em todo o mundo onde os datacenters da Microsoft estão localizados e onde os serviços do Azure estão disponíveis. Cada região do Azure é composta por um ou mais datacenters e é projetada para ser independente e resistente a falhas."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é um grupo de recursos (Resource Group) no Azure?",
        options: [
          "a) Um grupo de recursos no Azure é um grupo de usuários que têm permissões de acesso a um conjunto específico de recursos.",
          "b) Um grupo de recursos no Azure é uma unidade lógica que agrupa recursos relacionados para uma implantação, gerenciamento e monitoramento mais fáceis.",
          "c) Um grupo de recursos no Azure é um conjunto de servidores que são usados para armazenar dados de backup.",
          "d) Um grupo de recursos no Azure é um conjunto de políticas de segurança que são aplicadas a todos os recursos em uma assinatura do Azure.",
        ],
        answer: 1,
        explanation: "A opção 'b' está correta. Um grupo de recursos (Resource Group) no Azure é uma unidade lógica que agrupa recursos relacionados para facilitar a implantação, o gerenciamento e o monitoramento. Os recursos no mesmo grupo de recursos compartilham as mesmas políticas de ciclo de vida, permissões de acesso e tags."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "Quais são os principais serviços de computação do Azure?",
        options: [
          "a) Os principais serviços de computação do Azure incluem apenas máquinas virtuais e aplicativos web.",
          "b) Os principais serviços de computação do Azure incluem máquinas virtuais, aplicativos web, funções e contêineres.",
          "c) Os principais serviços de computação do Azure incluem apenas aplicativos web e funções.",
          "d) Os principais serviços de computação do Azure incluem apenas funções e contêineres.",
        ],
        answer: 1,
        explanation: "A opção 'b' está correta. Os principais serviços de computação do Azure incluem máquinas virtuais, que fornecem ambientes de computação virtualizados; aplicativos web, que permitem hospedar e gerenciar aplicativos web; funções (Azure Functions), que permitem executar código sem a necessidade de provisionar servidores; e contêineres, que facilitam a implantação e o gerenciamento de aplicativos em contêineres isolados."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que são máquinas virtuais no Azure?",
        options: [
          "a) Máquinas virtuais no Azure são servidores físicos dedicados a uma única organização.",
          "b) Máquinas virtuais no Azure são instâncias virtuais de computadores que funcionam como um servidor físico, mas são compartilhadas por várias organizações.",
          "c) Máquinas virtuais no Azure são uma coleção de serviços gerenciados que facilitam o desenvolvimento, implantação e dimensionamento de aplicativos sem a necessidade de gerenciamento de servidores.",
          "d) Máquinas virtuais no Azure são uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
        ],
        answer: 1,
        explanation: "A opção 'b' está correta. Máquinas virtuais no Azure são instâncias virtuais de computadores que funcionam como um servidor físico, mas são compartilhadas por várias organizações. Elas permitem que os usuários executem diversos sistemas operacionais e aplicativos em máquinas virtuais isoladas no mesmo hardware físico."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Serviço de Aplicativo (App Service) do Azure?",
        options: [
          "a) O Serviço de Aplicativo do Azure é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "b) O Serviço de Aplicativo do Azure é uma coleção de serviços gerenciados que facilitam o desenvolvimento, implantação e dimensionamento de aplicativos sem a necessidade de gerenciamento de servidores.",
          "c) O Serviço de Aplicativo do Azure é um serviço de banco de dados relacional totalmente gerenciado.",
          "d) O Serviço de Aplicativo do Azure é uma solução de segurança cibernética fornecida pela Microsoft para proteger sistemas e redes.",
        ],
        answer: 1,
        explanation: "A opção 'b' está correta. O Serviço de Aplicativo (App Service) do Azure é uma coleção de serviços gerenciados que facilitam o desenvolvimento, implantação e dimensionamento de aplicativos sem a necessidade de gerenciamento de servidores. Ele suporta várias linguagens de programação e estruturas, permitindo que os desenvolvedores criem rapidamente aplicativos web, móveis, API e lógica de negócios."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Functions?",
        options: [
          "a) O Azure Functions é um serviço de banco de dados relacional totalmente gerenciado.",
          "b) O Azure Functions é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Functions é um serviço de computação serverless que permite executar código sem a necessidade de provisionar servidores.",
          "d) O Azure Functions é uma solução de segurança cibernética fornecida pela Microsoft para proteger sistemas e redes.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. O Azure Functions é um serviço de computação serverless do Azure que permite aos desenvolvedores executar código sem a necessidade de provisionar servidores. Ele permite que os desenvolvedores criem pequenos trechos de código (funções) que são acionados por eventos específicos e são escalados automaticamente conforme a demanda."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que são contêineres no Azure?",
        options: [
          "a) Contêineres no Azure são servidores físicos dedicados a uma única organização.",
          "b) Contêineres no Azure são instâncias virtuais de computadores que funcionam como um servidor físico, mas são compartilhadas por várias organizações.",
          "c) Contêineres no Azure são uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "d) Contêineres no Azure são uma tecnologia de virtualização que permite executar aplicativos em ambientes isolados e portáteis.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. Contêineres no Azure são uma tecnologia de virtualização que permite aos desenvolvedores criar, implantar e executar aplicativos e seus ambientes em ambientes isolados e portáteis. Eles são executados em cima de um sistema operacional compartilhado, tornando-os mais leves e mais rápidos em comparação com máquinas virtuais tradicionais."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Kubernetes Service (AKS)?",
        options: [
          "a) O Azure Kubernetes Service (AKS) é um serviço de banco de dados relacional totalmente gerenciado.",
          "b) O Azure Kubernetes Service (AKS) é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Kubernetes Service (AKS) é um serviço de orquestração de contêineres totalmente gerenciado do Kubernetes.",
          "d) O Azure Kubernetes Service (AKS) é uma solução de segurança cibernética fornecida pela Microsoft para proteger sistemas e redes.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. O Azure Kubernetes Service (AKS) é um serviço de orquestração de contêineres totalmente gerenciado do Kubernetes. Ele simplifica a implantação, o gerenciamento e a escalabilidade de contêineres usando o Kubernetes, uma plataforma de código aberto para automatizar a implantação, o dimensionamento e o gerenciamento de aplicativos em contêineres."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Active Directory (Azure AD)?",
        options: [
          "a) O Azure Active Directory (Azure AD) é uma solução de backup e recuperação de desastres para os serviços do Azure.",
          "b) O Azure Active Directory (Azure AD) é uma solução de segurança cibernética fornecida pela Microsoft para proteger sistemas e redes.",
          "c) O Azure Active Directory (Azure AD) é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "d) O Azure Active Directory (Azure AD) é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Active Directory (Azure AD) é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure. Ele permite que as organizações gerenciem o acesso de usuários e grupos a recursos e aplicativos na nuvem e na rede local, além de fornecer recursos avançados de segurança e conformidade."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Policy?",
        options: [
          "a) O Azure Policy é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "b) O Azure Policy é uma solução de segurança cibernética fornecida pela Microsoft para proteger sistemas e redes.",
          "c) O Azure Policy é uma solução de backup e recuperação de desastres para os serviços do Azure.",
          "d) O Azure Policy é um serviço que permite definir e aplicar políticas para recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Policy é um serviço do Azure que permite definir e aplicar políticas para recursos do Azure. Ele ajuda a garantir que os recursos implantados estejam em conformidade com as diretrizes e os padrões definidos pela organização, permitindo melhor governança e gerenciamento de recursos."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Virtual Network?",
        options: [
          "a) O Azure Virtual Network é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Virtual Network é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Virtual Network é um serviço que permite definir e aplicar políticas para recursos do Azure.",
          "d) O Azure Virtual Network é um serviço de rede que permite criar redes privadas virtuais isoladas na nuvem do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Virtual Network é um serviço de rede que permite criar redes privadas virtuais isoladas na nuvem do Azure. Ele permite que as organizações estabeleçam conexões seguras entre recursos e serviços na nuvem, bem como com redes locais."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Load Balancer?",
        options: [
          "a) O Azure Load Balancer é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "b) O Azure Load Balancer é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "c) O Azure Load Balancer é um serviço que permite definir e aplicar políticas para recursos do Azure.",
          "d) O Azure Load Balancer é um serviço de balanceamento de carga que distribui o tráfego de rede entre várias instâncias de um serviço ou aplicativo em execução.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Load Balancer é um serviço de balanceamento de carga que distribui o tráfego de rede entre várias instâncias de um serviço ou aplicativo em execução. Ele ajuda a melhorar a disponibilidade e a escalabilidade de aplicativos ao garantir que as solicitações de entrada sejam distribuídas de forma uniforme entre as instâncias."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Application Gateway?",
        options: [
          "a) O Azure Application Gateway é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Application Gateway é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Application Gateway é um serviço que permite definir e aplicar políticas para recursos do Azure.",
          "d) O Azure Application Gateway é um serviço de balanceamento de carga de aplicativos da web que fornece roteamento avançado, balanceamento de carga e recursos de segurança.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Application Gateway é um serviço de balanceamento de carga de aplicativos da web que fornece roteamento avançado, balanceamento de carga e recursos de segurança. Ele permite que os usuários gerenciem o tráfego de entrada para aplicativos baseados em HTTP ou HTTPS, fornecendo alta disponibilidade, escalabilidade e desempenho."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Content Delivery Network (CDN)?",
        options: [
          "a) O Azure Content Delivery Network (CDN) é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Content Delivery Network (CDN) é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Content Delivery Network (CDN) é um serviço que permite definir e aplicar políticas para recursos do Azure.",
          "d) O Azure Content Delivery Network (CDN) é um serviço que fornece uma maneira eficiente de distribuir conteúdo para usuários finais, reduzindo a latência e o tempo de carregamento.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Content Delivery Network (CDN) é um serviço que fornece uma maneira eficiente de distribuir conteúdo para usuários finais, reduzindo a latência e o tempo de carregamento. Ele coloca cópias de conteúdo em servidores em várias localizações geográficas, permitindo que os usuários acessem o conteúdo de um servidor mais próximo, resultando em uma melhor experiência do usuário."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure ExpressRoute?",
        options: [
          "a) O Azure ExpressRoute é um serviço que fornece uma maneira eficiente de distribuir conteúdo para usuários finais, reduzindo a latência e o tempo de carregamento.",
          "b) O Azure ExpressRoute é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure ExpressRoute é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "d) O Azure ExpressRoute é um serviço que fornece uma conexão de rede dedicada e privada entre a infraestrutura local de uma organização e os data centers do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure ExpressRoute é um serviço que fornece uma conexão de rede dedicada e privada entre a infraestrutura local de uma organização e os data centers do Azure. Ele permite que as organizações estabeleçam conexões de alta velocidade e baixa latência com o Azure, o que é especialmente útil para cenários em que a conectividade direta é necessária."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Logic Apps?",
        options: [
          "a) O Azure Logic Apps é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Logic Apps é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Logic Apps é um serviço que fornece uma maneira eficiente de distribuir conteúdo para usuários finais, reduzindo a latência e o tempo de carregamento.",
          "d) O Azure Logic Apps é um serviço de automação que permite que os usuários criem fluxos de trabalho automatizados e integrados entre aplicativos e serviços.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Logic Apps é um serviço de automação que permite que os usuários criem fluxos de trabalho automatizados e integrados entre aplicativos e serviços. Ele permite a integração fácil de diferentes sistemas e aplicativos, automatizando tarefas repetitivas e melhorando a eficiência operacional."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Functions?",
        options: [
          "a) O Azure Functions é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Functions é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Functions é um serviço de automação que permite que os usuários criem fluxos de trabalho automatizados e integrados entre aplicativos e serviços.",
          "d) O Azure Functions é um serviço de computação sem servidor que permite executar código em resposta a eventos sem a necessidade de gerenciar infraestrutura.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Functions é um serviço de computação sem servidor que permite executar código em resposta a eventos sem a necessidade de gerenciar infraestrutura. Ele permite que os desenvolvedores criem funções pequenas e específicas que respondem a eventos, como carregamento de um arquivo, envio de uma mensagem ou alteração em um banco de dados."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Kubernetes Service (AKS)?",
        options: [
          "a) O Azure Kubernetes Service (AKS) é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Kubernetes Service (AKS) é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Kubernetes Service (AKS) é um serviço que fornece uma maneira eficiente de distribuir conteúdo para usuários finais, reduzindo a latência e o tempo de carregamento.",
          "d) O Azure Kubernetes Service (AKS) é um serviço de orquestração de contêineres que simplifica o implante, o gerenciamento e a escala de aplicativos em contêineres.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Kubernetes Service (AKS) é um serviço de orquestração de contêineres que simplifica o implante, o gerenciamento e a escala de aplicativos em contêineres. Ele permite que os usuários criem, configurem e gerenciem clusters Kubernetes com facilidade, facilitando a implantação e o dimensionamento de aplicativos em contêineres."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure DevOps?",
        options: [
          "a) O Azure DevOps é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure DevOps é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure DevOps é um serviço que fornece uma maneira eficiente de distribuir conteúdo para usuários finais, reduzindo a latência e o tempo de carregamento.",
          "d) O Azure DevOps é um conjunto de ferramentas de desenvolvimento que permite que os desenvolvedores planejem, criem, testem e entreguem aplicativos de forma eficiente.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure DevOps é um conjunto de ferramentas de desenvolvimento que permite que os desenvolvedores planejem, criem, testem e entreguem aplicativos de forma eficiente. Ele oferece recursos para gerenciamento de projetos, controle de versão de código, automação de builds e implantações, testes automatizados e muito mais, ajudando as equipes de desenvolvimento a trabalhar de maneira colaborativa e produtiva."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Key Vault?",
        options: [
          "a) O Azure Key Vault é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Key Vault é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Key Vault é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Key Vault é um serviço que fornece uma maneira eficiente de distribuir conteúdo para usuários finais, reduzindo a latência e o tempo de carregamento.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. O Azure Key Vault é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure. Ele permite que os usuários armazenem e controlem o acesso a chaves de criptografia, certificados e outros segredos, ajudando a proteger informações sensíveis."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Cosmos DB?",
        options: [
          "a) O Azure Cosmos DB é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Cosmos DB é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Cosmos DB é um serviço de banco de dados distribuído globalmente, altamente escalável e com suporte para vários modelos de dados.",
          "d) O Azure Cosmos DB é um serviço que fornece uma maneira eficiente de distribuir conteúdo para usuários finais, reduzindo a latência e o tempo de carregamento.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. O Azure Cosmos DB é um serviço de banco de dados distribuído globalmente, altamente escalável e com suporte para vários modelos de dados, como documentos, grafos, colunas e chave-valor. Ele permite que os desenvolvedores criem aplicativos modernos com baixa latência e alta disponibilidade em escala global."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure App Service?",
        options: [
          "a) O Azure App Service é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure App Service é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure App Service é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure App Service é um serviço de hospedagem na web totalmente gerenciado que permite aos desenvolvedores criar, implantar e dimensionar aplicativos da web e APIs.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure App Service é um serviço de hospedagem na web totalmente gerenciado que permite aos desenvolvedores criar, implantar e dimensionar aplicativos da web e APIs. Ele oferece suporte a várias linguagens de programação e estruturas, facilitando o desenvolvimento e a implantação de aplicativos da web de forma rápida e fácil."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Functions Premium Plan?",
        options: [
          "a) O Azure Functions Premium Plan é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Functions Premium Plan é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Functions Premium Plan é um serviço de computação sem servidor que permite executar código em resposta a eventos sem a necessidade de gerenciar infraestrutura.",
          "d) O Azure Functions Premium Plan é um plano de consumo do Azure Functions que fornece recursos avançados, como tempo de execução mais longo, suporte a VNET e implantação virtualizada.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Functions Premium Plan é um plano de consumo do Azure Functions que fornece recursos avançados, como tempo de execução mais longo, suporte a VNET (Virtual Network) e implantação virtualizada. Ele é projetado para atender às necessidades de aplicativos com requisitos mais exigentes e permite maior controle e personalização do ambiente de execução."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure API Management?",
        options: [
          "a) O Azure API Management é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure API Management é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure API Management é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure API Management é um serviço que permite que as organizações criem, protejam, gerenciem e dimensionem APIs para usuários internos e externos.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure API Management é um serviço que permite que as organizações criem, protejam, gerenciem e dimensionem APIs (Interfaces de Programação de Aplicativos) para usuários internos e externos. Ele oferece recursos para controle de acesso, monitoramento, análise de uso e muito mais, ajudando as organizações a expor suas APIs de forma segura e eficiente."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Service Fabric?",
        options: [
          "a) O Azure Service Fabric é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Service Fabric é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Service Fabric é um serviço de computação sem servidor que permite executar código em resposta a eventos sem a necessidade de gerenciar infraestrutura.",
          "d) O Azure Service Fabric é uma plataforma de aplicativos distribuídos que facilita a criação, implantação e gerenciamento de microsserviços.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Service Fabric é uma plataforma de aplicativos distribuídos que facilita a criação, implantação e gerenciamento de microsserviços. Ele fornece recursos para construir aplicativos altamente escaláveis e disponíveis, simplificando a abstração da infraestrutura e permitindo que os desenvolvedores se concentrem na lógica do aplicativo."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Virtual Machines?",
        options: [
          "a) O Azure Virtual Machines é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Virtual Machines é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Virtual Machines é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Virtual Machines é um serviço de infraestrutura de máquinas virtuais altamente escalável e flexível.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Virtual Machines é um serviço de infraestrutura de máquinas virtuais altamente escalável e flexível. Ele permite que os usuários criem e gerenciem máquinas virtuais em execução na nuvem do Azure, oferecendo suporte a vários sistemas operacionais e tamanhos de máquina para atender às necessidades de diferentes cargas de trabalho."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure App Configuration?",
        options: [
          "a) O Azure App Configuration é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure App Configuration é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure App Configuration é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure App Configuration é um serviço que oferece um repositório centralizado para gerenciar chaves, cadeias de conexão e outras configurações dos aplicativos.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure App Configuration é um serviço que oferece um repositório centralizado para gerenciar chaves, cadeias de conexão e outras configurações dos aplicativos. Ele permite que os desenvolvedores modifiquem dinamicamente as configurações dos aplicativos sem a necessidade de reimplementá-los, facilitando a atualização e o gerenciamento das configurações em vários ambientes."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Load Balancer?",
        options: [
          "a) O Azure Load Balancer é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Load Balancer é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Load Balancer é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Load Balancer é um serviço de balanceamento de carga de rede que distribui o tráfego de entrada entre os recursos em uma mesma rede virtual ou entre redes virtuais.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Load Balancer é um serviço de balanceamento de carga de rede que distribui o tráfego de entrada entre os recursos em uma mesma rede virtual ou entre redes virtuais. Ele ajuda a melhorar a disponibilidade e a escalabilidade dos aplicativos, distribuindo as solicitações de entrada de forma uniforme entre os recursos que estão sendo balanceados, garantindo a eficiência do uso dos recursos e a alta disponibilidade dos aplicativos."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Virtual Network?",
        options: [
          "a) O Azure Virtual Network é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Virtual Network é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Virtual Network é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Virtual Network é um serviço que permite criar uma rede isolada na nuvem do Azure, proporcionando conectividade segura entre os recursos do Azure e com redes locais.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Virtual Network é um serviço que permite criar uma rede isolada na nuvem do Azure, proporcionando conectividade segura entre os recursos do Azure e com redes locais. Ele permite que os usuários criem redes virtuais personalizadas para seus recursos, garantindo que eles possam se comunicar de forma segura e eficiente, mesmo em ambientes distribuídos e híbridos."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Content Delivery Network (CDN)?",
        options: [
          "a) O Azure Content Delivery Network (CDN) é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Content Delivery Network (CDN) é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Content Delivery Network (CDN) é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Content Delivery Network (CDN) é um serviço que fornece uma maneira eficiente de distribuir conteúdo para usuários finais, reduzindo a latência e o tempo de carregamento.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Content Delivery Network (CDN) é um serviço que fornece uma maneira eficiente de distribuir conteúdo, como imagens, vídeos, arquivos e outros recursos estáticos, para usuários finais em todo o mundo, reduzindo a latência e o tempo de carregamento. Ele ajuda a melhorar a experiência do usuário, fornecendo conteúdo a partir de servidores mais próximos geograficamente, reduzindo a carga nos servidores de origem e acelerando a entrega de conteúdo."
      },
      {
        category: "Descreva a arquitetura e os serviços do Azure (35–40%)",
        question: "O que é o Azure Kubernetes Service (AKS)?",
        options: [
          "a) O Azure Kubernetes Service (AKS) é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Kubernetes Service (AKS) é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Kubernetes Service (AKS) é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Kubernetes Service (AKS) é um serviço de orquestração de contêineres totalmente gerenciado que simplifica a implantação, a administração e a escalabilidade de aplicativos em contêineres.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Kubernetes Service (AKS) é um serviço de orquestração de contêineres totalmente gerenciado que simplifica a implantação, a administração e a escalabilidade de aplicativos em contêineres. Ele permite que os usuários criem clusters Kubernetes sem a necessidade de gerenciar a infraestrutura subjacente, facilitando a implantação de aplicativos baseados em contêineres de maneira eficiente e segura."
      },{
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Resource Manager?",
        options: [
          "a) O Azure Resource Manager é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Resource Manager é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Resource Manager é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Resource Manager é um serviço que permite que você gerencie e organize os recursos do Azure de maneira consistente e escalável.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Resource Manager é um serviço que permite que você gerencie e organize os recursos do Azure de maneira consistente e escalável. Ele fornece uma maneira unificada de criar, implantar, atualizar e excluir recursos do Azure, garantindo que todos os recursos relacionados a um aplicativo sejam agrupados em um grupo de recursos para facilitar o gerenciamento."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Policy?",
        options: [
          "a) O Azure Policy é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Policy é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Policy é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Policy é um serviço que permite a você criar, atribuir e gerenciar políticas para aplicar restrições e governança em seus recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Policy é um serviço que permite a você criar, atribuir e gerenciar políticas para aplicar restrições e governança em seus recursos do Azure. Com o Azure Policy, você pode definir políticas para garantir que os recursos do Azure estejam em conformidade com as regras e padrões definidos pela organização, ajudando a manter a conformidade e a segurança dos recursos."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Monitor?",
        options: [
          "a) O Azure Monitor é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Monitor é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Monitor é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Monitor é um serviço que oferece insights abrangentes sobre o desempenho e a disponibilidade dos aplicativos e recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Monitor é um serviço que oferece insights abrangentes sobre o desempenho e a disponibilidade dos aplicativos e recursos do Azure. Ele coleta dados de monitoramento de várias fontes, como máquinas virtuais, contêineres, aplicativos e serviços, e fornece informações úteis e métricas para ajudar os usuários a entenderem o desempenho de seus recursos e tomar decisões informadas."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Log Analytics?",
        options: [
          "a) O Azure Log Analytics é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Log Analytics é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Log Analytics é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Log Analytics é um serviço que coleta, analisa e visualiza logs e dados de telemetria de recursos do Azure e de outros serviços conectados.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Log Analytics é um serviço que coleta, analisa e visualiza logs e dados de telemetria de recursos do Azure e de outros serviços conectados. Ele ajuda a monitorar e solucionar problemas de forma proativa, permitindo que os usuários realizem consultas e análises avançadas em seus dados de log para identificar problemas e tendências, bem como tomar decisões informadas com base em insights valiosos."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Blueprints?",
        options: [
          "a) O Azure Blueprints é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Blueprints é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Blueprints é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Blueprints é um serviço que permite a você definir e implantar uma configuração predefinida e repetível para recursos do Azure, seguindo as melhores práticas da organização.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Blueprints é um serviço que permite a você definir e implantar uma configuração predefinida e repetível para recursos do Azure, seguindo as melhores práticas da organização. Com o Azure Blueprints, você pode criar um conjunto de recursos do Azure, incluindo políticas, grupos de recursos e muito mais, e implantá-los de maneira consistente em ambientes do Azure, garantindo a conformidade e a governança da organização."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Cost Management and Billing?",
        options: [
          "a) O Azure Cost Management and Billing é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Cost Management and Billing é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Cost Management and Billing é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Cost Management and Billing é um serviço que permite a você controlar, otimizar e gerenciar os custos e o uso dos recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Cost Management and Billing é um serviço que permite a você controlar, otimizar e gerenciar os custos e o uso dos recursos do Azure. Ele fornece insights detalhados sobre os custos do Azure e permite que os usuários criem orçamentos, monitorem o uso de recursos e identifiquem oportunidades de otimização para reduzir os custos e maximizar o valor do investimento em nuvem."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Governance?",
        options: [
          "a) O Azure Governance é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Governance é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Governance é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Governance é um conjunto de práticas, políticas e ferramentas que ajudam a governar e gerenciar o ambiente do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Governance é um conjunto de práticas, políticas e ferramentas que ajudam a governar e gerenciar o ambiente do Azure. Ele inclui recursos como Azure Policy, Azure Blueprints e Azure Cost Management and Billing, que permitem que os usuários definam e apliquem políticas, padrões e diretrizes para garantir a conformidade, segurança e eficiência no uso dos recursos do Azure."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Service Health?",
        options: [
          "a) O Azure Service Health é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Service Health é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Service Health é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Service Health é um serviço que fornece informações sobre a integridade e disponibilidade dos serviços do Azure em regiões específicas.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Service Health é um serviço que fornece informações sobre a integridade e disponibilidade dos serviços do Azure em regiões específicas. Ele oferece insights em tempo real sobre o status dos serviços do Azure, notificações de eventos de manutenção e interrupções, permitindo que os usuários monitorem e respondam a problemas que possam afetar suas cargas de trabalho e aplicativos."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Active Directory (Azure AD)?",
        options: [
          "a) O Azure Active Directory (Azure AD) é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Active Directory (Azure AD) é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Active Directory (Azure AD) é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Active Directory (Azure AD) é um serviço de banco de dados gerenciado que permite o armazenamento e acesso a dados estruturados no Azure.",
        ],
        answer: 0,
        explanation: "A opção 'a' está correta. O Azure Active Directory (Azure AD) é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure. Ele fornece recursos como autenticação de usuário, gerenciamento de acesso e segurança para aplicativos e serviços do Azure, permitindo que os usuários acessem recursos com segurança, gerenciando identidades e permissões de forma centralizada."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Policy Guest Configuration?",
        options: [
          "a) O Azure Policy Guest Configuration é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Policy Guest Configuration é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Policy Guest Configuration é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Policy Guest Configuration é um serviço que avalia e aplica automaticamente as configurações de segurança para recursos do Azure e de máquinas virtuais.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Policy Guest Configuration é um serviço que avalia e aplica automaticamente as configurações de segurança para recursos do Azure e de máquinas virtuais. Ele permite que você defina políticas para garantir que as configurações de segurança relevantes sejam aplicadas a recursos específicos, ajudando a manter a conformidade com as diretrizes de segurança da organização e reduzindo riscos de segurança em seus ambientes de nuvem."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Monitor for Containers?",
        options: [
          "a) O Azure Monitor for Containers é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Monitor for Containers é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Monitor for Containers é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Monitor for Containers é um serviço que monitora a integridade e o desempenho de aplicativos e clusters de contêiner no Azure Kubernetes Service (AKS).",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Monitor for Containers é um serviço que monitora a integridade e o desempenho de aplicativos e clusters de contêiner no Azure Kubernetes Service (AKS). Ele fornece informações detalhadas sobre o uso de recursos, latência, erros e outras métricas importantes para ajudar os usuários a entenderem o desempenho de seus contêineres e tomar ações para otimizar a infraestrutura do AKS."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Security Center?",
        options: [
          "a) O Azure Security Center é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Security Center é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Security Center é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Security Center é um serviço que fornece uma visão unificada da postura de segurança de seus recursos e ajuda a detectar e responder a ameaças de segurança.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Security Center é um serviço que fornece uma visão unificada da postura de segurança de seus recursos e ajuda a detectar e responder a ameaças de segurança. Ele oferece recomendações de segurança personalizadas e inteligentes, bem como insights sobre as principais ameaças e vulnerabilidades em sua infraestrutura, ajudando os usuários a fortalecer a segurança e proteger seus ambientes de nuvem."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Automation?",
        options: [
          "a) O Azure Automation é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Automation é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Automation é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Automation é um serviço que permite automatizar tarefas e processos manuais em sua infraestrutura do Azure e em outros serviços conectados.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Automation é um serviço que permite automatizar tarefas e processos manuais em sua infraestrutura do Azure e em outros serviços conectados. Ele oferece recursos de automação poderosos, permitindo que os usuários criem fluxos de trabalho, agendem tarefas e gerenciem recursos de maneira eficiente e confiável, reduzindo o trabalho manual e melhorando a produtividade."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Policy Insights?",
        options: [
          "a) O Azure Policy Insights é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Policy Insights é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Policy Insights é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Policy Insights é um serviço que fornece informações detalhadas sobre a conformidade de recursos do Azure com políticas definidas.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Policy Insights é um serviço que fornece informações detalhadas sobre a conformidade de recursos do Azure com políticas definidas. Ele permite que os usuários monitorem a conformidade de suas implantações em relação às políticas de governança e tomem ações corretivas caso os recursos estejam fora de conformidade, garantindo que a infraestrutura do Azure esteja alinhada com as diretrizes e padrões estabelecidos pela organização."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Blueprints?",
        options: [
          "a) O Azure Blueprints é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Blueprints é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Blueprints é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Blueprints é um serviço que permite criar e implantar templates reutilizáveis de recursos do Azure, incluindo políticas, grupos de recursos e muito mais.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Blueprints é um serviço que permite criar e implantar templates reutilizáveis de recursos do Azure, incluindo políticas, grupos de recursos e muito mais. Ele ajuda a padronizar a implementação de recursos, garantindo que todas as implantações sigam as melhores práticas, diretrizes e conformidade da organização, facilitando o gerenciamento e a governança dos recursos no Azure."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Resource Graph?",
        options: [
          "a) O Azure Resource Graph é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Resource Graph é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Resource Graph é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Resource Graph é um serviço que permite explorar e consultar de forma rápida e eficiente todos os recursos do Azure em várias assinaturas e regiões.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Resource Graph é um serviço que permite explorar e consultar de forma rápida e eficiente todos os recursos do Azure em várias assinaturas e regiões. Ele oferece uma experiência de consulta avançada para encontrar recursos específicos, identificar tendências e padrões, e obter insights detalhados sobre o ambiente do Azure, ajudando os usuários a entenderem melhor a infraestrutura e tomarem decisões informadas para otimizar o uso e o desempenho dos recursos."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Policy Guest Configuration?",
        options: [
          "a) O Azure Policy Guest Configuration é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Policy Guest Configuration é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Policy Guest Configuration é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Policy Guest Configuration é um serviço que avalia e aplica automaticamente as configurações de segurança para recursos do Azure e de máquinas virtuais.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Policy Guest Configuration é um serviço que avalia e aplica automaticamente as configurações de segurança para recursos do Azure e de máquinas virtuais. Ele permite que você defina políticas para garantir que as configurações de segurança relevantes sejam aplicadas a recursos específicos, ajudando a manter a conformidade com as diretrizes de segurança da organização e reduzindo riscos de segurança em seus ambientes de nuvem."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Monitor for VMs?",
        options: [
          "a) O Azure Monitor for VMs é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Monitor for VMs é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Monitor for VMs é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Monitor for VMs é um serviço que fornece insights detalhados sobre o desempenho e a disponibilidade de máquinas virtuais (VMs) no Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Monitor for VMs é um serviço que fornece insights detalhados sobre o desempenho e a disponibilidade de máquinas virtuais (VMs) no Azure. Ele permite que os usuários monitorem o desempenho das VMs, identifiquem gargalos, otimizem recursos e recebam alertas em caso de problemas, garantindo que suas VMs estejam funcionando de maneira eficiente e confiável."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Cost Management and Billing?",
        options: [
          "a) O Azure Cost Management and Billing é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Cost Management and Billing é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Cost Management and Billing é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Cost Management and Billing é um serviço que permite controlar e otimizar os custos do Azure, fornecendo insights detalhados sobre o consumo de recursos e faturas do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Cost Management and Billing é um serviço que permite controlar e otimizar os custos do Azure, fornecendo insights detalhados sobre o consumo de recursos e faturas do Azure. Ele ajuda os usuários a entenderem melhor seus gastos na nuvem, identificar oportunidades de economia e otimizar o uso de recursos para garantir que estejam obtendo o melhor valor pelo investimento no Azure."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Monitor?",
        options: [
          "a) O Azure Monitor é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Monitor é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Monitor é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Monitor é um serviço que fornece uma solução abrangente de monitoramento e diagnóstico para aplicativos e recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Monitor é um serviço que fornece uma solução abrangente de monitoramento e diagnóstico para aplicativos e recursos do Azure. Ele oferece insights detalhados sobre o desempenho, disponibilidade e integridade dos recursos do Azure, permitindo que os usuários identifiquem problemas e tomem medidas para melhorar o desempenho e a confiabilidade de suas cargas de trabalho na nuvem."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Service Health?",
        options: [
          "a) O Azure Service Health é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Service Health é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Service Health é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Service Health é um serviço que fornece informações e alertas sobre a integridade e disponibilidade dos serviços do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Service Health é um serviço que fornece informações e alertas sobre a integridade e disponibilidade dos serviços do Azure. Ele ajuda os usuários a ficarem informados sobre eventos que podem afetar suas cargas de trabalho, como interrupções de serviço planejadas ou não planejadas, e fornece orientações para resolver problemas e minimizar impactos em suas operações na nuvem."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Resource Manager (ARM)?",
        options: [
          "a) O Azure Resource Manager (ARM) é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Resource Manager (ARM) é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Resource Manager (ARM) é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Resource Manager (ARM) é um serviço que fornece um ambiente consistente para criar, implantar e gerenciar recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Resource Manager (ARM) é um serviço que fornece um ambiente consistente para criar, implantar e gerenciar recursos do Azure. Ele permite que os usuários criem recursos relacionados como um grupo para que possam gerenciá-los como uma unidade. O ARM também oferece modelos para automação de implantações e controle de acesso baseado em função para gerenciar o acesso aos recursos do Azure."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Policy?",
        options: [
          "a) O Azure Policy é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Policy é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Policy é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Policy é um serviço que permite criar, atribuir e aplicar políticas de governança em recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Policy é um serviço que permite criar, atribuir e aplicar políticas de governança em recursos do Azure. Ele ajuda a impor regras e diretrizes específicas para recursos, garantindo que eles estejam em conformidade com os padrões e práticas estabelecidas pela organização, facilitando o controle e a governança dos recursos na nuvem."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é a Hierarquia do Azure Management?",
        options: [
          "a) A Hierarquia do Azure Management é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) A Hierarquia do Azure Management é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) A Hierarquia do Azure Management é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) A Hierarquia do Azure Management é uma estrutura que organiza e gerencia recursos do Azure em grupos, assinaturas e diretórios.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. A Hierarquia do Azure Management é uma estrutura que organiza e gerencia recursos do Azure em grupos, assinaturas e diretórios. Ela permite que os usuários agrupem recursos relacionados em um grupo de recursos, gerenciem o acesso e as permissões em nível de assinatura e organizem recursos em diretórios, facilitando o gerenciamento e a governança dos recursos no Azure."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Policy Compliance?",
        options: [
          "a) O Azure Policy Compliance é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Policy Compliance é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Policy Compliance é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Policy Compliance é um serviço que fornece informações sobre a conformidade de recursos do Azure com as políticas definidas.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Policy Compliance é um serviço que fornece informações sobre a conformidade de recursos do Azure com as políticas definidas. Ele permite que os usuários avaliem a conformidade de seus recursos em relação às políticas aplicadas e tomem ações corretivas para garantir que os recursos estejam em conformidade com as diretrizes e padrões estabelecidos pela organização."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Blueprints Policy?",
        options: [
          "a) O Azure Blueprints Policy é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Blueprints Policy é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Blueprints Policy é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Blueprints Policy é um serviço que combina Azure Policy e Azure Blueprints para fornecer uma solução completa de governança de recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Blueprints Policy é um serviço que combina Azure Policy e Azure Blueprints para fornecer uma solução completa de governança de recursos do Azure. Ele permite que os usuários definam políticas específicas em um blueprint e apliquem essas políticas a um grupo de recursos para garantir que os recursos criados usando esse blueprint estejam em conformidade com as diretrizes e práticas estabelecidas pela organização."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Security Center?",
        options: [
          "a) O Azure Security Center é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Security Center é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Security Center é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Security Center é um serviço que fornece recomendações de segurança e detecção de ameaças para recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Security Center é um serviço que fornece recomendações de segurança e detecção de ameaças para recursos do Azure. Ele ajuda a identificar e mitigar riscos de segurança, analisando a configuração de recursos e identificando vulnerabilidades potenciais. Além disso, ele fornece insights e alertas sobre atividades suspeitas em recursos do Azure, ajudando os usuários a garantir que suas cargas de trabalho na nuvem estejam protegidas contra ameaças cibernéticas."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Policy Guest Configuration?",
        options: [
          "a) O Azure Policy Guest Configuration é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Policy Guest Configuration é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Policy Guest Configuration é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Policy Guest Configuration é um serviço que verifica a conformidade de recursos do Azure com base em políticas definidas pelo usuário.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Policy Guest Configuration é um serviço que verifica a conformidade de recursos do Azure com base em políticas definidas pelo usuário. Ele permite que os usuários definam e apliquem políticas de configuração para recursos do Azure, garantindo que eles estejam configurados de acordo com os padrões e diretrizes de segurança estabelecidos pela organização."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Governance?",
        options: [
          "a) O Azure Governance é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Governance é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Governance é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Governance é um conjunto de práticas, políticas e procedimentos que permitem aos usuários gerenciar e controlar seus recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Governance é um conjunto de práticas, políticas e procedimentos que permitem aos usuários gerenciar e controlar seus recursos do Azure. Ele inclui serviços e ferramentas que ajudam na governança dos recursos, desde o controle de acesso e políticas até o monitoramento de conformidade e gerenciamento de custos, garantindo que os recursos do Azure estejam sendo utilizados de maneira eficiente e em conformidade com as diretrizes estabelecidas pela organização."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "Quais são os benefícios do Azure Policy e Azure Blueprints para a governança do Azure?",
        options: [
          "a) Azure Policy e Azure Blueprints são ferramentas de monitoramento de recursos do Azure.",
          "b) Azure Policy e Azure Blueprints não oferecem benefícios para a governança do Azure.",
          "c) Azure Policy e Azure Blueprints fornecem recursos para gerenciar identidades e acesso no Azure.",
          "d) Azure Policy e Azure Blueprints permitem criar, implantar e gerenciar políticas e padrões para governança de recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. Azure Policy e Azure Blueprints permitem criar, implantar e gerenciar políticas e padrões para governança de recursos do Azure. O Azure Policy fornece um mecanismo para impor regras e diretrizes específicas em recursos do Azure, garantindo que eles estejam em conformidade com as políticas estabelecidas pela organização. O Azure Blueprints permite definir um conjunto de recursos relacionados como um blueprint e implantar esses recursos juntos, garantindo que eles sigam as políticas e práticas definidas na criação."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Management Groups?",
        options: [
          "a) O Azure Management Groups é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Management Groups é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Management Groups é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Management Groups é uma estrutura hierárquica que permite gerenciar o acesso, as políticas e o cumprimento de recursos do Azure em grande escala.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Management Groups é uma estrutura hierárquica que permite gerenciar o acesso, as políticas e o cumprimento de recursos do Azure em grande escala. Ele fornece uma forma de organizar recursos em grupos lógicos para aplicar políticas e gerenciar acesso em uma hierarquia, permitindo que os usuários gerenciem eficientemente recursos em grande escala no Azure."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Resource Locks?",
        options: [
          "a) O Azure Resource Locks é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Resource Locks é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Resource Locks é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Resource Locks é uma funcionalidade que permite bloquear recursos do Azure para evitar exclusões acidentais ou modificações.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Resource Locks é uma funcionalidade que permite bloquear recursos do Azure para evitar exclusões acidentais ou modificações. Ele permite que os usuários apliquem locks nos recursos para evitar alterações indesejadas, garantindo que eles permaneçam protegidos contra alterações acidentais ou não autorizadas."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que são as políticas de gerenciamento no Azure Policy?",
        options: [
          "a) As políticas de gerenciamento no Azure Policy são uma coleção de grupos lógicos de recursos.",
          "b) As políticas de gerenciamento no Azure Policy são um conjunto de práticas recomendadas para o uso eficiente dos recursos do Azure.",
          "c) As políticas de gerenciamento no Azure Policy são um conjunto de regras que definem as ações permitidas ou negadas em recursos do Azure.",
          "d) As políticas de gerenciamento no Azure Policy são um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. As políticas de gerenciamento no Azure Policy são um conjunto de regras que definem as ações permitidas ou negadas em recursos do Azure. Elas são usadas para impor diretrizes específicas em recursos, garantindo que eles estejam em conformidade com as práticas e políticas estabelecidas pela organização."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "Qual é o objetivo principal do Azure Policy?",
        options: [
          "a) O objetivo principal do Azure Policy é fornecer insights sobre o uso de recursos do Azure.",
          "b) O objetivo principal do Azure Policy é gerenciar identidades e acesso de usuários no Azure.",
          "c) O objetivo principal do Azure Policy é monitorar a conformidade de recursos do Azure com as políticas definidas.",
          "d) O objetivo principal do Azure Policy é recomendar as melhores práticas para implantação de recursos no Azure.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. O objetivo principal do Azure Policy é monitorar a conformidade de recursos do Azure com as políticas definidas. Ele ajuda a garantir que os recursos estejam em conformidade com as diretrizes e padrões estabelecidos pela organização, fornecendo informações sobre a conformidade e permitindo tomar ações corretivas quando necessário."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Monitor?",
        options: [
          "a) O Azure Monitor é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Monitor é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Monitor é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Monitor é um serviço de monitoramento e diagnóstico que fornece informações detalhadas sobre o desempenho e a disponibilidade de recursos do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Monitor é um serviço de monitoramento e diagnóstico que fornece informações detalhadas sobre o desempenho e a disponibilidade de recursos do Azure. Ele permite monitorar recursos e aplicativos na nuvem, coletar e analisar dados de desempenho e enviar alertas em caso de problemas ou anomalias, garantindo que os recursos estejam funcionando de forma eficiente e confiável."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "Quais são os benefícios do Azure Monitor para o gerenciamento de recursos do Azure?",
        options: [
          "a) Azure Monitor não oferece benefícios para o gerenciamento de recursos do Azure.",
          "b) Azure Monitor fornece informações detalhadas sobre o desempenho e a disponibilidade de recursos do Azure.",
          "c) Azure Monitor permite criar, implantar e gerenciar políticas e padrões para governança de recursos do Azure.",
          "d) Azure Monitor oferece recursos de gerenciamento de identidades e acesso no Azure.",
        ],
        answer: 1,
        explanation: "A opção 'b' está correta. Azure Monitor fornece informações detalhadas sobre o desempenho e a disponibilidade de recursos do Azure. Ele ajuda os usuários a entender o desempenho de seus recursos, identificar problemas de disponibilidade e desempenho, e tomar decisões informadas sobre a otimização e escalabilidade dos recursos no Azure."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "O que é o Azure Service Health?",
        options: [
          "a) O Azure Service Health é um serviço de gerenciamento de identidades e acesso baseado em nuvem do Azure.",
          "b) O Azure Service Health é uma plataforma de código aberto que permite aos desenvolvedores criar, testar e implantar aplicativos rapidamente.",
          "c) O Azure Service Health é um serviço de gerenciamento de chaves criptográficas e segredos usados por aplicativos e serviços do Azure.",
          "d) O Azure Service Health é um serviço que fornece informações sobre a integridade e a disponibilidade dos serviços do Azure.",
        ],
        answer: 3,
        explanation: "A opção 'd' está correta. O Azure Service Health é um serviço que fornece informações sobre a integridade e a disponibilidade dos serviços do Azure. Ele permite que os usuários verifiquem o status dos serviços do Azure em suas regiões e recebam alertas sobre interrupções e problemas de disponibilidade, ajudando a entender o impacto em seus recursos e aplicativos."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "Como o Azure Policy ajuda na conformidade com os padrões?",
        options: [
          "a) Azure Policy não oferece suporte à conformidade com padrões.",
          "b) Azure Policy permite criar, atribuir e aplicar políticas de governança em recursos do Azure.",
          "c) Azure Policy fornece informações detalhadas sobre o desempenho e a disponibilidade de recursos do Azure.",
          "d) Azure Policy oferece recursos de gerenciamento de identidades e acesso no Azure.",
        ],
        answer: 2,
        explanation: "A opção 'b' está correta. Azure Policy permite criar, atribuir e aplicar políticas de governança em recursos do Azure. Ele ajuda a impor regras e diretrizes específicas para recursos, garantindo que eles estejam em conformidade com os padrões e práticas estabelecidas pela organização. Isso ajuda a manter a conformidade com os padrões de governança e segurança definidos pela organização."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "Qual é o objetivo principal do Azure Blueprints?",
        options: [
          "a) O objetivo principal do Azure Blueprints é fornecer insights sobre o uso de recursos do Azure.",
          "b) O objetivo principal do Azure Blueprints é gerenciar identidades e acesso de usuários no Azure.",
          "c) O objetivo principal do Azure Blueprints é monitorar a conformidade de recursos do Azure com as políticas definidas.",
          "d) O objetivo principal do Azure Blueprints é oferecer uma maneira de criar e implantar recursos do Azure de acordo com as diretrizes e práticas da organização.",
        ],
        answer: 4,
        explanation: "A opção 'd' está correta. O objetivo principal do Azure Blueprints é oferecer uma maneira de criar e implantar recursos do Azure de acordo com as diretrizes e práticas da organização. Ele permite definir um conjunto de recursos relacionados como um blueprint e implantar esses recursos juntos, garantindo que eles sigam as políticas e práticas definidas pela organização na criação."
      },
      {
        category: "Descreva o gerenciamento e governança do Azure (30–35%)",
        question: "Como o Azure Cost Management e Billing ajuda na governança do Azure?",
        options: [
          "a) Azure Cost Management e Billing não estão relacionados à governança do Azure.",
          "b) Azure Cost Management e Billing permitem criar, atribuir e aplicar políticas de governança em recursos do Azure.",
          "c) Azure Cost Management e Billing fornecem informações detalhadas sobre o desempenho e a disponibilidade de recursos do Azure.",
          "d) Azure Cost Management e Billing ajudam a controlar e otimizar os custos dos recursos do Azure, garantindo que eles estejam sendo usados de maneira eficiente e dentro do orçamento.",
        ],
        answer: 4,
        explanation: "A opção 'd' está correta. Azure Cost Management e Billing ajudam a controlar e otimizar os custos dos recursos do Azure, garantindo que eles estejam sendo usados de maneira eficiente e dentro do orçamento. Isso é importante para a governança do Azure, pois permite que as organizações monitorem e controlem os gastos com recursos na nuvem, evitando gastos excessivos e garantindo que o uso dos recursos esteja alinhado com as políticas e objetivos financeiros da organização."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "Explique a diferença entre nuvem pública e nuvem privada.",
        options: [
          "a) Nuvem pública é um modelo onde os recursos de computação são compartilhados por várias organizações, enquanto nuvem privada é um modelo onde os recursos são dedicados a uma única organização.",
          "b) Nuvem pública é um modelo onde os recursos de computação são compartilhados por uma única organização, enquanto nuvem privada é um modelo onde os recursos são compartilhados por várias organizações.",
          "c) Nuvem pública é um modelo onde os recursos de computação são dedicados a uma única organização, enquanto nuvem privada é um modelo onde os recursos são compartilhados por várias organizações.",
          "d) Nuvem pública é um modelo onde os recursos de computação são compartilhados por várias organizações, enquanto nuvem privada é um modelo onde os recursos são dedicados a uma única organização.",
        ],
        answer: 0,
        explanation: "A opção 'a' está correta. Nuvem pública é um modelo onde os recursos de computação são compartilhados por várias organizações, enquanto nuvem privada é um modelo onde os recursos são dedicados a uma única organização. Essas duas abordagens oferecem vantagens e desafios distintos, e a escolha entre elas dependerá das necessidades e requisitos específicos de cada organização."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "O que é computação em nuvem sem servidor (serverless)?",
        options: [
          "a) Computação em nuvem sem servidor é um modelo onde não há servidores físicos envolvidos, e todo o processamento é feito por dispositivos móveis.",
          "b) Computação em nuvem sem servidor é um modelo onde não há servidores físicos envolvidos, e o fornecedor de nuvem é responsável por todo o gerenciamento da infraestrutura.",
          "c) Computação em nuvem sem servidor é um modelo onde não há servidores físicos envolvidos, e o usuário é responsável por todo o gerenciamento da infraestrutura.",
          "d) Computação em nuvem sem servidor é um modelo onde não há servidores físicos envolvidos, e o processamento é feito por dispositivos locais.",
        ],
        answer: 1,
        explanation: "A opção 'b' está correta. Computação em nuvem sem servidor (serverless) é um modelo onde não há servidores físicos envolvidos, e o fornecedor de nuvem é responsável por todo o gerenciamento da infraestrutura, incluindo o dimensionamento automático e a alocação de recursos, permitindo que o usuário foque apenas na lógica do aplicativo sem se preocupar com a infraestrutura subjacente."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "O que são funções como serviço (Function as a Service - FaaS) na computação em nuvem?",
        options: [
          "a) Funções como serviço (FaaS) são aplicativos inteiros que são implantados na nuvem e podem ser acessados remotamente.",
          "b) Funções como serviço (FaaS) são serviços de armazenamento oferecidos pela nuvem para armazenar dados dos usuários.",
          "c) Funções como serviço (FaaS) são unidades de código independentes que são executadas em resposta a eventos específicos, e os usuários pagam apenas pelas execuções das funções.",
          "d) Funções como serviço (FaaS) são serviços oferecidos pela nuvem para dimensionar recursos automaticamente conforme a demanda do usuário.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. Funções como serviço (FaaS) são unidades de código independentes que são executadas em resposta a eventos específicos, e os usuários pagam apenas pelas execuções das funções. Essas funções são ideais para execuções breves e intermitentes, permitindo que os desenvolvedores criem soluções mais modulares e reativas."
      },
      {
        category: "Descreva conceitos de computação em nuvem (25–30%)",
        question: "Como a computação em nuvem contribui para a sustentabilidade ambiental?",
        options: [
          "a) A computação em nuvem consome muita energia e, portanto, não contribui significativamente para a sustentabilidade ambiental.",
          "b) A computação em nuvem não tem impacto na sustentabilidade ambiental, pois é apenas uma transferência de energia de um local para outro.",
          "c) A computação em nuvem utiliza data centers altamente eficientes e virtualização para otimizar o uso de recursos, o que pode resultar em menor consumo de energia e menor impacto ambiental.",
          "d) A computação em nuvem utiliza exclusivamente energia renovável, garantindo que não haja impacto negativo no meio ambiente.",
        ],
        answer: 2,
        explanation: "A opção 'c' está correta. A computação em nuvem contribui para a sustentabilidade ambiental ao utilizar data centers altamente eficientes e técnicas de virtualização, o que pode resultar em menor consumo de energia e menor impacto ambiental. Os provedores de nuvem estão cada vez mais buscando fontes de energia renovável para alimentar seus data centers, tornando a computação em nuvem uma opção mais ecológica para as organizações."
      },
      {
            category: "Descreva conceitos de computação em nuvem (25–30%)",
            question: "Explique o que é o modelo de responsabilidade compartilhada na nuvem.",
            options: [
              "a) O modelo de responsabilidade compartilhada na nuvem é um modelo onde o provedor de nuvem é totalmente responsável por garantir a segurança dos dados e aplicativos do usuário.",
              "b) O modelo de responsabilidade compartilhada na nuvem é um modelo onde o usuário é totalmente responsável por garantir a segurança dos dados e aplicativos na nuvem.",
              "c) O modelo de responsabilidade compartilhada na nuvem é um modelo onde tanto o provedor de nuvem quanto o usuário têm responsabilidades compartilhadas na segurança dos dados e aplicativos.",
              "d) O modelo de responsabilidade compartilhada na nuvem é um modelo onde o provedor de nuvem é responsável apenas pelo armazenamento dos dados, e o usuário é responsável por tudo o mais.",
            ],
            answer: 2,
            explanation: "A opção 'c' está correta. No modelo de responsabilidade compartilhada na nuvem, tanto o provedor de nuvem quanto o usuário têm responsabilidades compartilhadas na segurança dos dados e aplicativos. O provedor de nuvem é responsável pela segurança da infraestrutura da nuvem, enquanto o usuário é responsável pela segurança de seus dados e aplicativos na nuvem."
          },
          {
            category: "Descreva conceitos de computação em nuvem (25–30%)",
            question: "O que é computação em nuvem?",
            options: [
              "a) Computação em nuvem é uma tecnologia que permite o acesso a recursos de computação pela internet.",
              "b) Computação em nuvem é uma tecnologia que permite o acesso a recursos de computação apenas por meio de redes locais.",
              "c) Computação em nuvem é uma tecnologia que permite o acesso a recursos de computação apenas por meio de servidores locais.",
              "d) Computação em nuvem é uma tecnologia que permite o acesso a recursos de computação apenas por meio de dispositivos móveis.",
            ],
            answer: 0,
            explanation: "A opção 'a' está correta. A computação em nuvem é uma tecnologia que oferece acesso a recursos de computação, como servidores, armazenamento e aplicativos, pela internet, sem que seja necessário ter esses recursos fisicamente em sua própria infraestrutura."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "O que é o Azure Resource Manager (ARM) no Microsoft Azure?",
            options: [
              "a) O Azure Resource Manager (ARM) é uma ferramenta de monitoramento de desempenho no Azure.",
              "b) O Azure Resource Manager (ARM) é um serviço de gerenciamento de banco de dados no Azure.",
              "c) O Azure Resource Manager (ARM) é um serviço de orquestração que permite implantar, gerenciar e organizar recursos do Azure.",
              "d) O Azure Resource Manager (ARM) é uma ferramenta de desenvolvimento de aplicativos no Azure.",
            ],
            answer: 2,
            explanation: "A opção 'c' está correta. O Azure Resource Manager (ARM) é um serviço de orquestração que permite implantar, gerenciar e organizar recursos do Azure. Ele fornece uma maneira consistente de criar, atualizar e excluir recursos no Azure, além de gerenciar suas dependências e políticas de acesso."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "Quais são as zonas de disponibilidade no Azure?",
            options: [
              "a) As zonas de disponibilidade no Azure são regiões geográficas que abrangem várias cidades.",
              "b) As zonas de disponibilidade no Azure são data centers independentes, cada um com alimentação, refrigeração e rede próprias.",
              "c) As zonas de disponibilidade no Azure são conjuntos de regiões geográficas que compartilham recursos para garantir alta disponibilidade.",
              "d) As zonas de disponibilidade no Azure são unidades de falha que compõem uma região do Azure e são destinadas a proteger contra falhas de hardware.",
            ],
            answer: 1,
            explanation: "A opção 'b' está correta. As zonas de disponibilidade no Azure são data centers independentes, cada um com alimentação, refrigeração e rede próprias. Cada zona de disponibilidade é uma unidade de falha isolada, o que significa que falhas em uma zona não afetarão outras zonas, garantindo alta disponibilidade e tolerância a falhas."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "Qual serviço do Azure é usado para criar, implantar e gerenciar aplicativos empresariais em grande escala?",
            options: [
              "a) Azure App Service",
              "b) Azure Virtual Machines",
              "c) Azure Kubernetes Service (AKS)",
              "d) Azure Functions",
            ],
            answer: 0,
            explanation: "A opção 'a' está correta. O Azure App Service é usado para criar, implantar e gerenciar aplicativos empresariais em grande escala. Ele oferece suporte a várias linguagens de programação e estruturas, permitindo que os desenvolvedores criem aplicativos web, móveis, API e lógica de negócios com facilidade."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "O que é o Azure Kubernetes Service (AKS)?",
            options: [
              "a) O Azure Kubernetes Service (AKS) é um serviço de gerenciamento de banco de dados no Azure.",
              "b) O Azure Kubernetes Service (AKS) é um serviço de armazenamento no Azure para arquivos e objetos.",
              "c) O Azure Kubernetes Service (AKS) é um serviço de orquestração de contêineres que simplifica a implantação, o gerenciamento e a escalabilidade de aplicativos em contêineres.",
              "d) O Azure Kubernetes Service (AKS) é um serviço de monitoramento de recursos no Azure.",
            ],
            answer: 2,
            explanation: "A opção 'c' está correta. O Azure Kubernetes Service (AKS) é um serviço de orquestração de contêineres que simplifica a implantação, o gerenciamento e a escalabilidade de aplicativos em contêineres. Ele facilita a criação de clusters Kubernetes e permite que você se concentre na implementação e execução de aplicativos em vez de gerenciar a infraestrutura subjacente."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "Quais são os grupos de recursos (resource groups) no Azure?",
            options: [
              "a) Grupos de recursos são grupos de máquinas virtuais que compartilham o mesmo propósito.",
              "b) Grupos de recursos são contêineres que armazenam informações de faturamento do Azure.",
              "c) Grupos de recursos são grupos de serviços relacionados que são implantados em várias regiões.",
              "d) Grupos de recursos são contêineres lógicos que contêm recursos do Azure para fins de gerenciamento, implantação e controle de acesso.",
            ],
            answer: 3,
            explanation: "A opção 'd' está correta. Grupos de recursos (resource groups) são contêineres lógicos que contêm recursos do Azure para fins de gerenciamento, implantação e controle de acesso. Eles permitem que você organize e gerencie recursos relacionados como uma unidade, facilitando a implantação, atualização e exclusão de recursos como um conjunto coeso."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "O que é o Azure Virtual Network?",
            options: [
              "a) O Azure Virtual Network é um serviço de gerenciamento de banco de dados no Azure.",
              "b) O Azure Virtual Network é um serviço de orquestração de contêineres no Azure.",
              "c) O Azure Virtual Network é um serviço de armazenamento no Azure para arquivos e objetos.",
              "d) O Azure Virtual Network é um serviço que permite criar redes virtuais isoladas no Azure.",
            ],
            answer: 3,
            explanation: "A opção 'd' está correta. O Azure Virtual Network é um serviço que permite criar redes virtuais isoladas no Azure. Ele permite conectar recursos do Azure, como máquinas virtuais, a redes privadas e públicas, fornecendo controle sobre o tráfego de rede e permitindo a criação de infraestruturas de rede seguras e personalizadas."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "Qual serviço do Azure é usado para monitorar a integridade de recursos do Azure em tempo real?",
            options: [
              "a) Azure Monitor",
              "b) Azure Service Health",
              "c) Azure Advisor",
              "d) Azure Log Analytics",
            ],
            answer: 0,
            explanation: "A opção 'a' está correta. O Azure Monitor é usado para monitorar a integridade de recursos do Azure em tempo real. Ele fornece insights sobre o desempenho e a disponibilidade dos recursos, permitindo que você detecte e resolva problemas rapidamente, além de configurar alertas personalizados para notificar sobre eventos importantes."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "O que é o Azure Active Directory (Azure AD)?",
            options: [
              "a) O Azure Active Directory (Azure AD) é um serviço de banco de dados gerenciado no Azure.",
              "b) O Azure Active Directory (Azure AD) é um serviço de armazenamento de objetos no Azure.",
              "c) O Azure Active Directory (Azure AD) é um serviço de diretório e identidade baseado em nuvem.",
              "d) O Azure Active Directory (Azure AD) é um serviço de análise e geração de relatórios no Azure.",
            ],
            answer: 2,
            explanation: "A opção 'c' está correta. O Azure Active Directory (Azure AD) é um serviço de diretório e identidade baseado em nuvem. Ele permite que você gerencie identidades e acesso a recursos em sua organização, fornecendo autenticação e autorização centralizadas para aplicativos e serviços do Azure e de terceiros."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "Qual serviço do Azure é uma solução de backup como serviço (BaaS) para proteger seus dados e aplicativos em nuvem e localmente?",
            options: [
              "a) Azure Site Recovery",
              "b) Azure Backup",
              "c) Azure Security Center",
              "d) Azure Storage Explorer",
            ],
            answer: 1,
            explanation: "A opção 'b' está correta. O Azure Backup é uma solução de backup como serviço (BaaS) no Azure que permite proteger seus dados e aplicativos em nuvem e localmente. Ele oferece backups automáticos e programados, permitindo que você restaure seus dados em caso de perda acidental ou corrupção de dados."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "Qual dos seguintes serviços do Azure é uma plataforma de análise de big data para processar e transformar dados em tempo real?",
            options: [
              "a) Azure Databricks",
              "b) Azure HDInsight",
              "c) Azure Data Factory",
              "d) Azure Stream Analytics",
            ],
            answer: 3,
            explanation: "A opção 'd' está correta. O Azure Stream Analytics é uma plataforma de análise de big data no Azure que permite processar e transformar dados em tempo real a partir de várias fontes, como sensores, dispositivos IoT e aplicativos de registro. Ele suporta consultas SQL para análise de dados em movimento e é altamente escalável e tolerante a falhas."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "O que é o Azure App Configuration?",
            options: [
              "a) O Azure App Configuration é um serviço de orquestração de contêineres no Azure.",
              "b) O Azure App Configuration é um serviço de gerenciamento de chaves e segredos no Azure.",
              "c) O Azure App Configuration é um serviço de armazenamento no Azure para arquivos e objetos.",
              "d) O Azure App Configuration é um serviço de gerenciamento de configurações para aplicativos.",
            ],
            answer: 3,
            explanation: "A opção 'd' está correta. O Azure App Configuration é um serviço de gerenciamento de configurações para aplicativos. Ele ajuda a gerenciar as configurações do aplicativo e os segredos em um único local, permitindo que você centralize e compartilhe as configurações entre diferentes componentes do aplicativo e implante as alterações de configuração sem a necessidade de reimplantar o aplicativo."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "O que é o Azure Key Vault?",
            options: [
              "a) O Azure Key Vault é um serviço de gerenciamento de banco de dados no Azure.",
              "b) O Azure Key Vault é um serviço de armazenamento de objetos no Azure.",
              "c) O Azure Key Vault é um serviço de diretório e identidade baseado em nuvem.",
              "d) O Azure Key Vault é um serviço de gerenciamento de chaves e segredos no Azure.",
            ],
            answer: 3,
            explanation: "A opção 'd' está correta. O Azure Key Vault é um serviço de gerenciamento de chaves e segredos no Azure. Ele permite armazenar e controlar o acesso a chaves, senhas, certificados e outros segredos usados por aplicativos e serviços. O Key Vault ajuda a proteger esses segredos e simplifica o processo de gerenciamento de chaves criptográficas e certificados."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "Qual dos seguintes serviços do Azure é usado para orquestrar fluxos de trabalho e processos de negócios em nuvem e no local?",
            options: [
              "a) Azure Data Factory",
              "b) Azure Logic Apps",
              "c) Azure App Service",
              "d) Azure Functions",
            ],
            answer: 1,
            explanation: "A opção 'b' está correta. O Azure Logic Apps é usado para orquestrar fluxos de trabalho e processos de negócios em nuvem e no local. Ele permite criar fluxos de trabalho automatizados que integram aplicativos e serviços em uma variedade de plataformas, tornando mais fácil a automação de tarefas e a comunicação entre diferentes sistemas."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "O que é o Azure DevOps?",
            options: [
              "a) O Azure DevOps é um serviço de gerenciamento de banco de dados no Azure.",
              "b) O Azure DevOps é um serviço de orquestração de contêineres no Azure.",
              "c) O Azure DevOps é um serviço de armazenamento no Azure para arquivos e objetos.",
              "d) O Azure DevOps é um conjunto de serviços de desenvolvimento de software que oferece suporte ao ciclo de vida de desenvolvimento de aplicativos.",
            ],
            answer: 3,
            explanation: "A opção 'd' está correta. O Azure DevOps é um conjunto de serviços de desenvolvimento de software que oferece suporte ao ciclo de vida de desenvolvimento de aplicativos. Ele fornece ferramentas para planejamento de projetos, colaboração em equipe, controle de código-fonte, compilação automatizada, teste e implantação contínua de aplicativos."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "Qual serviço do Azure é usado para criar, implantar e gerenciar APIs de forma segura?",
            options: [
              "a) Azure API Management",
              "b) Azure Kubernetes Service (AKS)",
              "c) Azure Logic Apps",
              "d) Azure Functions",
            ],
            answer: 0,
            explanation: "A opção 'a' está correta. O Azure API Management é usado para criar, implantar e gerenciar APIs de forma segura. Ele fornece recursos para controle de versão, segurança, monitoramento e análise de uso de APIs, permitindo que você compartilhe facilmente suas APIs com desenvolvedores internos e externos com segurança e controle."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "O que é o Azure Functions?",
            options: [
              "a) O Azure Functions é um serviço de gerenciamento de banco de dados no Azure.",
              "b) O Azure Functions é um serviço de orquestração de contêineres no Azure.",
              "c) O Azure Functions é um serviço de análise e geração de relatórios no Azure.",
              "d) O Azure Functions é um serviço de computação sem servidor que permite executar código sob demanda em resposta a eventos.",
            ],
            answer: 3,
            explanation: "A opção 'd' está correta. O Azure Functions é um serviço de computação sem servidor que permite executar código sob demanda em resposta a eventos. Ele suporta vários gatilhos, como HTTP, timer, fila de mensagens e muito mais, permitindo que você crie aplicativos reativos e baseados em eventos sem se preocupar com a infraestrutura subjacente."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "O que é o Azure Container Registry?",
            options: [
              "a) O Azure Container Registry é um serviço de gerenciamento de banco de dados no Azure.",
              "b) O Azure Container Registry é um serviço de orquestração de contêineres no Azure.",
              "c) O Azure Container Registry é um serviço de registro de contêiner privado no Azure.",
              "d) O Azure Container Registry é um serviço de análise e geração de relatórios no Azure.",
            ],
            answer: 2,
            explanation: "A opção 'c' está correta. O Azure Container Registry é um serviço de registro de contêiner privado no Azure. Ele permite que você armazene, gerencie e implante imagens de contêiner para seus aplicativos com segurança. O Azure Container Registry é útil quando você deseja controlar o acesso às suas imagens de contêiner e garantir que apenas os contêineres confiáveis sejam implantados em sua infraestrutura."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "O que é o Azure ExpressRoute?",
            options: [
              "a) O Azure ExpressRoute é um serviço de gerenciamento de banco de dados no Azure.",
              "b) O Azure ExpressRoute é um serviço de armazenamento de objetos no Azure.",
              "c) O Azure ExpressRoute é um serviço que estende suas redes locais para a Microsoft através de uma conexão dedicada e privada.",
              "d) O Azure ExpressRoute é um serviço de análise e geração de relatórios no Azure.",
            ],
            answer: 2,
            explanation: "A opção 'c' está correta. O Azure ExpressRoute é um serviço que estende suas redes locais para a Microsoft através de uma conexão dedicada e privada. Ele oferece uma conectividade mais segura, confiável e de baixa latência com o Azure, permitindo que você amplie sua infraestrutura local para a nuvem de forma híbrida."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "Qual serviço do Azure é usado para implantar aplicativos web escalonáveis e de alto desempenho?",
            options: [
              "a) Azure App Configuration",
              "b) Azure App Service",
              "c) Azure Key Vault",
              "d) Azure Virtual Machines",
            ],
            answer: 1,
            explanation: "A opção 'b' está correta. O Azure App Service é usado para implantar aplicativos web escalonáveis e de alto desempenho. Ele oferece suporte a várias linguagens de programação, integração com outros serviços do Azure e recursos de dimensionamento automático para atender às demandas de tráfego variáveis."
          },
          {
            category: "Descrever arquitetura e serviços do Azure (35–40%)",
            question: "O que é o Azure Traffic Manager?",
            options: [
              "a) O Azure Traffic Manager é um serviço de gerenciamento de banco de dados no Azure.",
              "b) O Azure Traffic Manager é um serviço de balanceamento de carga no Azure.",
              "c) O Azure Traffic Manager é um serviço de armazenamento de objetos no Azure.",
              "d) O Azure Traffic Manager é um serviço de orquestração de contêineres no Azure.",
            ],
            answer: 1,
            explanation: "A opção 'b' está correta. O Azure Traffic Manager é um serviço de balanceamento de carga no Azure. Ele ajuda a melhorar a disponibilidade e o desempenho dos aplicativos, distribuindo o tráfego entre várias instâncias do aplicativo em diferentes regiões geográficas ou zonas de disponibilidade."
          }
    // As próximas perguntas continuam aqui...
  ];
  
  // Função para obter um número aleatório entre min e max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
// Função para obter perguntas únicas e aleatórias com quantidade mínima
function getUniqueRandomQuestions(questions, numQuestions) {
    if (numQuestions > questions.length) {
      numQuestions = questions.length; // Define numQuestions para o total de perguntas se for maior que o total
    }
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, numQuestions);
  
    // Verifica se a quantidade selecionada é menor que o número mínimo e, se for o caso, adiciona perguntas adicionais aleatoriamente
    while (selectedQuestions.length < numQuestions) {
      const remainingQuestions = numQuestions - selectedQuestions.length;
      const additionalQuestions = shuffledQuestions.slice(selectedQuestions.length, selectedQuestions.length + remainingQuestions);
      selectedQuestions.push(...additionalQuestions);
    }
  
    return selectedQuestions;
  }
  
  
  // Função para obter perguntas de uma categoria específica
  function getQuestionsByCategory(questions, category) {
    return questions.filter((question) => question.category === category);
  }
  
// Função para obter um número aleatório entre min e max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Função para criar um simulado com perguntas únicas e aleatórias de cada categoria
  function createRandomSimulado(questions) {
    // Obtém as perguntas de cada categoria
    const cloudConceptsQuestions = getQuestionsByCategory(questions, "Descreva conceitos de computação em nuvem (25–30%)");
    const azureArchitectureQuestions = getQuestionsByCategory(questions, "Describe Azure architecture and services (35–40%)");
    const azureManagementQuestions = getQuestionsByCategory(questions, "Describe Azure management and governance (30–35%)");
  
    // Define a quantidade mínima e máxima de perguntas para cada categoria
    const minNumCloudConceptsQuestions = 6;
    const maxNumCloudConceptsQuestions = 10;
    const minNumAzureArchitectureQuestions = 10;
    const maxNumAzureArchitectureQuestions = 20;
    const minNumAzureManagementQuestions = 10;
    const maxNumAzureManagementQuestions = 20;
  
    // Calcula a quantidade total de perguntas para o simulado (aleatório entre 40 e 60)
    let totalQuestions = getRandomNumber(40, 60);
  
    // Distribui as perguntas aleatoriamente em cada categoria
    let numCloudConceptsQuestions = getRandomNumber(minNumCloudConceptsQuestions, maxNumCloudConceptsQuestions);
    let numAzureArchitectureQuestions = getRandomNumber(minNumAzureArchitectureQuestions, maxNumAzureArchitectureQuestions);
    let numAzureManagementQuestions = totalQuestions - numCloudConceptsQuestions - numAzureArchitectureQuestions;
  
    // Verifica se a quantidade ultrapassou o máximo para alguma categoria e ajusta
    while (numAzureManagementQuestions > maxNumAzureManagementQuestions) {
      numCloudConceptsQuestions++;
      numAzureManagementQuestions--;
    }
    while (numCloudConceptsQuestions > maxNumCloudConceptsQuestions) {
      numAzureArchitectureQuestions++;
      numCloudConceptsQuestions--;
    }
    while (numAzureArchitectureQuestions > maxNumAzureArchitectureQuestions) {
      numAzureManagementQuestions++;
      numAzureArchitectureQuestions--;
    }
  
    // Ajusta para garantir o mínimo de perguntas em cada categoria
    if (numCloudConceptsQuestions < minNumCloudConceptsQuestions) {
      const diff = minNumCloudConceptsQuestions - numCloudConceptsQuestions;
      numCloudConceptsQuestions += diff;
      numAzureManagementQuestions -= diff;
    }
    if (numAzureArchitectureQuestions < minNumAzureArchitectureQuestions) {
      const diff = minNumAzureArchitectureQuestions - numAzureArchitectureQuestions;
      numAzureArchitectureQuestions += diff;
      numAzureManagementQuestions -= diff;
    }
    if (numAzureManagementQuestions < minNumAzureManagementQuestions) {
      const diff = minNumAzureManagementQuestions - numAzureManagementQuestions;
      numAzureManagementQuestions += diff;
      numCloudConceptsQuestions -= diff;
    }
  
    // Obtém perguntas únicas e aleatórias para cada categoria
    const cloudConceptsSimuladoQuestions = getUniqueRandomQuestions(cloudConceptsQuestions, numCloudConceptsQuestions);
    const azureArchitectureSimuladoQuestions = getUniqueRandomQuestions(azureArchitectureQuestions, numAzureArchitectureQuestions);
    const azureManagementSimuladoQuestions = getUniqueRandomQuestions(azureManagementQuestions, numAzureManagementQuestions);
  
    // Combina todas as perguntas em um único array
    const simuladoQuestions = [
      ...cloudConceptsSimuladoQuestions,
      ...azureArchitectureSimuladoQuestions,
      ...azureManagementSimuladoQuestions,
    ];
  
    // Verifica se a quantidade total de perguntas é menor que 40
    if (simuladoQuestions.length < 40) {
      // Adiciona perguntas adicionais aleatoriamente até atingir o mínimo de 40
      const remainingQuestions = 40 - simuladoQuestions.length;
      const allQuestions = questions.slice(); // Cria uma cópia das perguntas originais
      allQuestions.splice(allQuestions.indexOf(...simuladoQuestions), simuladoQuestions.length); // Remove as perguntas já selecionadas
      const additionalQuestions = getUniqueRandomQuestions(allQuestions, remainingQuestions);
      simuladoQuestions.push(...additionalQuestions);
    }
  
    // Embaralha novamente as perguntas para garantir a aleatoriedade
    simuladoQuestions.sort(() => 0.5 - Math.random());
  
    return simuladoQuestions;
  }
  
  // Obtém perguntas únicas e aleatórias para o simulado
  const simuladoQuestions = createRandomSimulado(questions);
  
  // Seu código existente a partir daqui...
  let timerInterval; // Variável para armazenar o intervalo do timer
  let currentQuestion = 0;
  let score = 0;
  let name = "";
  
  const nameSection = document.getElementById("name-section");
  const nameInput = document.getElementById("name-input");
  const startBtn = document.getElementById("start-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const resultContainer = document.getElementById("result-container");
  const nameDisplay = document.getElementById("name");
  const resultText = document.getElementById("result-text");
  const timerDisplay = document.getElementById("timer"); // Elemento que exibirá o timer
  
  startBtn.addEventListener("click", startQuiz);
  nameInput.addEventListener("keypress", handleNameKeyPress);
  
  function handleNameKeyPress(event) {
    if (event.key === "Enter") {
      startQuiz();
    }
  }
  
  function startQuiz() {
    name = nameInput.value.trim();
    if (name === "") {
      alert("Por favor, digite seu nome.");
      return;
    }
    nameSection.style.display = "none";
    questionContainer.style.display = "block";
    showQuestion();
  
    // Inicia o timer de 60 minutos (1 hora)
    const totalSeconds = 60 * 60;
    let secondsLeft = totalSeconds;
    updateTimerDisplay(secondsLeft); // Mostra o tempo inicial antes de começar a contar
  
    timerInterval = setInterval(() => {
      secondsLeft--;
      updateTimerDisplay(secondsLeft); // Atualiza o display do timer
  
      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        finishQuiz(); // Chama a função para finalizar o simulado
      }
    }, 1000); // 1000 milissegundos = 1 segundo
  }
  
  function updateTimerDisplay(secondsLeft) {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerDisplay.textContent = `Tempo restante: ${formattedTime}`;
  }
  
  function finishQuiz() {
    clearInterval(timerInterval); // Limpa o intervalo do timer
    showResult(); // Mostra o resultado final do simulado
  }
  
  function showQuestion() {
    const currentQuestionData = simuladoQuestions[currentQuestion]; // Use simuladoQuestions em vez de uniqueRandomQuestions
    questionText.textContent = currentQuestionData.question;
    optionsContainer.innerHTML = "";
  
    currentQuestionData.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="option" value="${index}"> ${option}`;
      optionsContainer.appendChild(label);
    });
  
    // Atualize o contador de perguntas restantes
    const questionsLeft = simuladoQuestions.length - currentQuestion;
    document.getElementById("count").textContent = questionsLeft.toString();
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return;
  
    const selectedAnswer = parseInt(selectedOption.value);
  
    if (selectedAnswer === simuladoQuestions[currentQuestion].answer) { // Use simuladoQuestions em vez de uniqueRandomQuestions
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < simuladoQuestions.length) { // Use simuladoQuestions em vez de uniqueRandomQuestions
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function updateQuestionCounter() {
    const questionsRemaining = simuladoQuestions.length - currentQuestion;
    document.getElementById("question-counter").textContent = `Perguntas restantes: ${questionsRemaining}`;
  }
  
// Função para calcular a porcentagem de acerto para uma categoria específica
function calculateCategoryPercentage(categoryQuestions, userAnswers) {
    const totalQuestions = categoryQuestions.length;
    const correctAnswers = categoryQuestions.reduce((total, question, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer === question.answer) {
        return total + 1;
      }
      return total;
    }, 0);
  
    const percentage = (correctAnswers / totalQuestions) * 100;
    return percentage.toFixed(2);
  }


  function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
  
    const totalQuestions = simuladoQuestions.length;
    const totalCorrectAnswers = score;
    const totalWrongAnswers = totalQuestions - totalCorrectAnswers;
    const totalPercentage = (totalCorrectAnswers / totalQuestions) * 100;
    const passed = totalPercentage >= 70;
  
  
    const resultMessage = document.getElementById("result-message");
    const accuracy = document.getElementById("accuracy");
    const scoreSummary = document.getElementById("score-summary");
    const retryBtn = document.getElementById("retry-btn");
  
    if (passed) {
      resultMessage.textContent = `Parabéns, ${name}! Você passou no simulado!`;
      resultMessage.classList.add("alert", "alert-success");
      retryBtn.style.display = "none";
    } else {
      resultMessage.textContent = `Infelizmente, ${name}, você não atingiu a nota de corte de 70%. Tente novamente!`;
      resultMessage.classList.add("alert", "alert-danger");
      retryBtn.style.display = "block";
    }
  
    accuracy.textContent = `Porcentagem de acerto: ${totalPercentage.toFixed(2)}%`;
    scoreSummary.textContent = `Perguntas certas: ${totalCorrectAnswers}, Perguntas erradas: ${totalWrongAnswers}`;
  
    resultMessage.style.display = "block";
    accuracy.style.display = "block";
    scoreSummary.style.display = "block";
  }
  
  
  
  
  // Função para calcular a porcentagem de acerto para uma categoria específica
  function calculateCategoryPercentage(categoryQuestions, userAnswers) {
    const totalQuestions = categoryQuestions.length;
    const correctAnswers = categoryQuestions.reduce((total, question, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer === question.answer) {
        return total + 1;
      }
      return total;
    }, 0);
  
    const percentage = (correctAnswers / totalQuestions) * 100;
    return percentage.toFixed(2);
  }
  
  
  // Event listener para o botão "Tentar novamente"
document.getElementById("retry-btn").addEventListener("click", retryQuiz);

// Event listener para o botão "Pratique mais"
document.getElementById("practice-more-btn").addEventListener("click", practiceMore);

// Função para recarregar a página e reiniciar o simulado
function retryQuiz() {
  location.reload();
}

// Função para redirecionar para uma página de prática adicional (coloque o link desejado na propriedade "href")
function practiceMore() {
  window.location.href = "index.html";
}

  
  document.getElementById("submit-btn").addEventListener("click", checkAnswer);
  updateQuestionCounter(); // Inicializa o contador de perguntas restantes
  showQuestion();
  
