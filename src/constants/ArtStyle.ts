const ArtStyle: Array<PromptOption> = [
  {
    label: 'Default',
    hint: '',
    checked: true,
    image: 'https://dummyimage.com/600x400/111111/a6a6a6.png&text=No+art+style',
    promptValue: '',
  },
  {
    label: 'guglielmo achille cavellini',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/89e1262c-79e1-4040-828b-0b73b58ce292/0_0.webp',
    promptValue: 'in the style of guglielmo achille cavellini',
  },
  {
    label: 'annick cuadrado',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/9d9a964f-ff84-4f70-a6e3-dc452515ab40/0_0.webp',
    promptValue: 'in the style of annick cuadrado',
  },
  {
    label: 'enrico donati',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/7b63faf9-c252-4c04-bf84-d872dc91d1ed/0_0.webp',
    promptValue: 'in the style of enrico donati',
  },
  {
    label: 'florian fausch',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/309fc074-6666-4ca8-82fc-5f078489eec1/0_0.webp',
    promptValue: 'in the style of florian fausch',
  },
  {
    label: 'johan barthold jongkind',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/64ce54a0-fd9a-434a-859d-d13ae7936113/0_0.webp',
    promptValue: 'in the style of johan barthold jongkind',
  },
  {
    label: 'nobuo sekine',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/659f0db5-0444-418c-84df-f9a3aa3ada9d/0_0.webp',
    promptValue: 'in the style of nobuo sekine',
  },
  {
    label: 'jonathan silverman',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/440f4878-ec7f-48a7-8749-efef876d04fd/0_0.webp',
    promptValue: 'in the style of jonathan silverman',
  },
  {
    label: 'jon todd',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/8d635d0e-eec9-474e-9b77-4693861b64fe/0_0.webp',
    promptValue: 'in the style of jon todd',
  },
  {
    label: 'li songsong',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/3bd11398-bd8e-46e1-b8c3-56be69bb2de2/0_0.webp',
    promptValue: 'in the style of li songsong',
  },
  {
    label: 'jose antonio da silva',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/619a8d3a-a98c-4a7b-8d24-b803b90202c5/0_0.webp',
    promptValue: 'in the style of jose antonio da silva',
  },
  {
    label: 'vic gentils',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/830f5128-aed8-4e9f-a2ea-0c394487d32f/0_0.webp',
    promptValue: 'in the style of vic gentils',
  },
  {
    label: 'aaron siskind',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/739df810-0c84-4b8d-9e92-bdd1deb3dc50/0_0.webp',
    promptValue: 'in the style of aaron siskind',
  },
  {
    label: 'brodsky & utkin',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/9828c248-165e-46d0-b400-776636ccda3c/0_0.webp',
    promptValue: 'in the style of brodsky & utkin',
  },
  {
    label: 'chuck fischer',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/1839aeee-7482-4fe9-a318-fa7d0df2cd77/0_0.webp',
    promptValue: 'in the style of chuck fischer',
  },
  {
    label: 'rex whistler',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/e4721beb-8425-478e-8a02-82a655ef4eab/0_0.webp',
    promptValue: 'in the style of rex whistler',
  },
  {
    label: 'christian robles',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/9726035f-4122-4c69-b242-1b10a351cfa3/0_0.webp',
    promptValue: 'in the style of christian robles',
  },
  {
    label: 'sun xun',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/3f877787-38f7-4dff-a3f4-a2e6448833f0/0_0.webp',
    promptValue: 'in the style of sun xun',
  },
  {
    label: 'eric godin',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/58f8927e-bf37-4437-86f9-556f9116adb5/0_0.webp',
    promptValue: 'in the style of eric godin',
  },
  {
    label: 'lowrens',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/641d23bb-17af-4a1f-b846-387f301b4811/0_0.webp',
    promptValue: 'in the style of lowrens',
  },
  {
    label: 'roland oudot',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/d73a7249-738c-4f01-8c47-3c382673311a/0_0.webp',
    promptValue: 'in the style of roland oudot',
  },
  {
    label: 'meena hasan',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/06d205c2-7e4c-42de-b5ff-2d9ff71568f3/0_0.webp',
    promptValue: 'in the style of meena hasan',
  },
  {
    label: 'fredster',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/d3c9be57-ff53-4278-a22b-2983cf162869/0_0.webp',
    promptValue: 'in the style of fredster',
  },
  {
    label: 'leonard baskin',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/e885e9bc-9344-486e-8a52-c73694eaae0c/0_0.webp',
    promptValue: 'in the style of leonard baskin',
  },
  {
    label: 'pierre-eugene clairin',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/498555ce-fad3-4e61-81cf-56c61686526d/0_0.webp',
    promptValue: 'in the style of pierre-eugene clairin',
  },
  {
    label: 'mia araujo',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/a9797708-1a99-418c-8571-debf45c4cc2b/0_0.webp',
    promptValue: 'in the style of mia araujo',
  },
  {
    label: 'tony graham',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/fb78e651-3eed-46ef-9891-c3bde56d6454/0_0.webp',
    promptValue: 'in the style of tony graham',
  },
  {
    label: 'pierre gimenez',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/d510a600-9825-4b98-a4a2-f0d35b9a65ec/0_0.webp',
    promptValue: 'in the style of pierre gimenez',
  },
  {
    label: 'genevieve asse',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/1e5756cc-2e81-4f7e-9c85-123e8c0cd815/0_0.webp',
    promptValue: 'in the style of genevieve asse',
  },
  {
    label: 'luis lazo',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/bad5a52c-bc8c-43a9-9848-af8be73c1cea/0_0.webp',
    promptValue: 'in the style of luis lazo',
  },
  {
    label: 'kevin red star',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/26c490b7-019b-4661-b25a-73e3f8d5f8f3/0_0.webp',
    promptValue: 'in the style of kevin red star',
  },
  {
    label: 'naomi middelmann',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/efba6fc7-de96-4cd1-8c33-1d4fe7530ddc/0_0.webp',
    promptValue: 'in the style of naomi middelmann',
  },
  {
    label: 'joan snyder',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/f0b68262-8503-4495-a561-bee0f099d6fc/0_0.webp',
    promptValue: 'in the style of joan snyder',
  },
  {
    label: 'claire cretu',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/49325a2c-85bf-4f94-a6ea-c341427f6d8b/0_0.webp',
    promptValue: 'in the style of claire cretu',
  },
  {
    label: 'analia saban',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/d8cde0f8-ca22-4e94-bfed-c5973ea82382/0_0.webp',
    promptValue: 'in the style of analia saban',
  },
  {
    label: 'alberto la tassa',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/f4f64aa1-4bb3-4147-ba7f-40ce74010e84/0_0.webp',
    promptValue: 'in the style of alberto la tassa',
  },
  {
    label: 'oscar llorens',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/3fc515dd-90c3-4116-bfb8-c452de27d1e0/0_0.webp',
    promptValue: 'in the style of oscar llorens',
  },
  {
    label: 'sahar zukerman',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/30709e1f-35d9-454c-8cfb-bb2857be1b13/0_0.webp',
    promptValue: 'in the style of sahar zukerman',
  },
  {
    label: 'vcalvento',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/35d0b7f1-8c05-4253-a736-a67c2f6aa238/0_0.webp',
    promptValue: 'in the style of vcalvento',
  },
  {
    label: 'scarlett hooft graafland',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/17d744d9-c07f-4928-9417-532b58b6c70b/0_0.webp',
    promptValue: 'in the style of scarlett hooft graafland',
  },
  {
    label: 'jean lebreton',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/af1b07f7-2206-4cba-8a76-1776b2b5655b/0_0.webp',
    promptValue: 'in the style of jean lebreton',
  },
  {
    label: 'paul gleason',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/717bdbed-f02a-47c1-8290-aa923a444b23/0_0.webp',
    promptValue: 'in the style of paul gleason',
  },
  {
    label: 'samuel palmer',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/5071a9db-529d-4e81-a87b-b7316b500835/0_0.webp',
    promptValue: 'in the style of samuel palmer',
  },
  {
    label: 'christopher brown',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/7a03d073-ba9c-49af-bc2c-656308e6bd88/0_0.webp',
    promptValue: 'in the style of christopher brown',
  },
  {
    label: 'jan saudek',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/d0da2071-b686-4ecb-b2b1-2a24270010e9/0_0.webp',
    promptValue: 'in the style of jan saudek',
  },
  {
    label: 'sonic',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/6a4ce2e3-2974-40a4-94be-b1ecc5500311/0_0.webp',
    promptValue: 'in the style of sonic: ',
  },
  {
    label: 'dave mcdermott',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/22d62b71-9ca8-4089-acfb-1d38f7967a83/0_0.webp',
    promptValue: 'in the style of dave mcdermott',
  },
  {
    label: 'titina maselli',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/5d95f708-da6b-463f-8ded-cf8915374173/0_0.webp',
    promptValue: 'in the style of titina maselli',
  },
  {
    label: 'alfredo otero',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/70db8bac-c219-47fd-a0a3-e82bcad58a48/0_0.webp',
    promptValue: 'in the style of alfredo otero',
  },
  {
    label: 'david hockney',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/4b7fb189-0e27-4a57-a357-4501013aad4a/0_0.webp',
    promptValue: 'in the style of david hockney',
  },
  {
    label: 'louis van staaten',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/199d1bed-3d03-40c2-bee1-8756cbd7d400/0_0.webp',
    promptValue: 'in the style of louis van staaten',
  },
  {
    label: 'clairy laurence',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/52d790e4-c1f1-430d-9da6-380219bf23c0/0_0.webp',
    promptValue: 'in the style of clairy laurence',
  },
  {
    label: 'mario nigro',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/58bd1d64-7fa9-49f4-80d2-cd07226162a7/0_0.webp',
    promptValue: 'in the style of mario nigro',
  },
  {
    label: 'margherita manzelli',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/995b3f58-3d9a-4c83-b75a-85e7a916d412/0_0.webp',
    promptValue: 'in the style of margherita manzelli',
  },
  {
    label: 'baba chuah',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/f10d058c-7101-49b8-9a2d-e45ba828a273/0_0.webp',
    promptValue: 'in the style of baba chuah',
  },
  {
    label: 'benny sy li',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/7279261c-5e1e-4135-8d3e-f0c011c96ec8/0_0.webp',
    promptValue: 'in the style of benny sy li',
  },
  {
    label: 'jurgen muller',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/18c1246b-41e9-495d-af08-3ab340194386/0_0.webp',
    promptValue: 'in the style of jurgen muller',
  },
  {
    label: 'monica shulman',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/d358f666-5bf7-4b1a-b12c-31705ee3d9f4/0_0.webp',
    promptValue: 'in the style of monica shulman',
  },
  {
    label: 'louise mcnaught',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/4bf09f45-26c3-47af-8715-81e0a94c1a2f/0_0.webp',
    promptValue: 'in the style of louise mcnaught',
  },
  {
    label: 'carl morris',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/2525083a-a176-4c0f-9089-43efa4ca0f65/0_0.webp',
    promptValue: 'in the style of carl morris',
  },
  {
    label: 'lolo soldevilla',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/c8f5d2aa-57a6-4f08-900b-dca67fb545ef/0_0.webp',
    promptValue: 'in the style of lolo soldevilla',
  },
  {
    label: 'sugimaru',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/6fb624af-78db-479f-bec8-02b8b9e3a1c6/0_0.webp',
    promptValue: 'in the style of sugimaru',
  },
  {
    label: 'victor charreton',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/232135a1-97f9-4879-b0be-0531e46271f4/0_0.webp',
    promptValue: 'in the style of victor charreton',
  },
  {
    label: 'piotr uklanski',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/2875aa09-dd11-4fe1-a729-913b1bdb4b85/0_0.webp',
    promptValue: 'in the style of piotr uklanski',
  },
  {
    label: 'marion russell',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/ce5fdd13-aa52-468d-a45e-42b4f5a00bda/0_0.webp',
    promptValue: 'in the style of marion russell',
  },
  {
    label: 'kevin sullivan',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/98fe3844-2119-4153-bdbd-a71ea7c9b079/0_0.webp',
    promptValue: 'in the style of kevin sullivan',
  },
  {
    label: 'nick waplington',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/86f3aadb-4374-4403-b8bf-5c927f252c47/0_0.webp',
    promptValue: 'in the style of nick waplington',
  },
  {
    label: 'marianne lang',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/0f08714f-a34b-47e1-b0d5-ac2be5bda2a2/0_0.webp',
    promptValue: 'in the style of marianne lang',
  },
  {
    label: 'eva gonzales',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/27a95d7d-8870-4fdc-8b88-ebe54b8f4a61/0_0.webp',
    promptValue: 'in the style of eva gonzales',
  },
  {
    label: 'kate brinkworth',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/45824943-35b2-414a-b212-d938e4026230/0_0.webp',
    promptValue: 'in the style of kate brinkworth',
  },
  {
    label: 'tm gratkowski',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/2b402c3f-f1da-4eb6-8649-f07f40b53f25/0_0.webp',
    promptValue: 'in the style of tm gratkowski',
  },
  {
    label: 'concetto maugeri',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/54c14aab-9e47-418b-b89e-ff1aaa3ac3bb/0_0.webp',
    promptValue: 'in the style of concetto maugeri',
  },
  {
    label: 'jonathan singer',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/2ff53afe-831d-45f7-8d00-9309e9499cf7/0_0.webp',
    promptValue: 'in the style of jonathan singer',
  },
  {
    label: 'martin wittfooth',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/39f3fea1-34ac-453d-bd33-4ae1bf85c876/0_0.webp',
    promptValue: 'in the style of martin wittfooth',
  },
  {
    label: 'adam broomberg & oliver chanarin',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/3cdba58e-bafe-4e52-9368-acb325171201/0_0.webp',
    promptValue: 'in the style of adam broomberg & oliver chanarin',
  },
  {
    label: 'karen joubert',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/56df54da-8f37-47d9-8085-416f4e69b4f4/0_0.webp',
    promptValue: 'in the style of karen joubert',
  },
  {
    label: 'jason rhoades',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/e3a27e59-86a5-4dfc-8144-3f9ab9296c2c/0_0.webp',
    promptValue: 'in the style of jason rhoades',
  },
  {
    label: 'lindsey carr',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/066404ca-4511-44ab-a4b6-d45bf087a776/0_0.webp',
    promptValue: 'in the style of lindsey carr',
  },
  {
    label: 'quim corominas',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/64e6fd9d-d5b7-4a24-b0d2-90dcad4fce49/0_0.webp',
    promptValue: 'in the style of quim corominas',
  },
  {
    label: 'idan zareski',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/5d9a3163-e035-4eaf-8766-8090e3021ac1/0_0.webp',
    promptValue: 'in the style of idan zareski',
  },
  {
    label: 'theo lopez',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/01a544aa-59f4-4e99-b6db-10784dd44d15/0_0.webp',
    promptValue: 'in the style of theo lopez',
  },
  {
    label: 'kamrooz aram',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/98263ffb-19e0-4bde-bc5f-1df3d2c5c2fc/0_0.webp',
    promptValue: 'in the style of kamrooz aram',
  },
  {
    label: 'kim ki-chang',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/8010f2b6-53f0-4434-936a-6601d70bfb5e/0_0.webp',
    promptValue: 'in the style of kim ki-chang',
  },
  {
    label: 'nikki rosato',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/03c93207-9e37-4376-901b-32be5369029b/0_0.webp',
    promptValue: 'in the style of nikki rosato',
  },
  {
    label: 'poul henningsen',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/679a903d-715a-4db1-a34b-71b978d8ab92/0_0.webp',
    promptValue: 'in the style of poul henningsen',
  },
  {
    label: 'faramarz pilaram',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/a171e171-fc94-4101-9bea-625345264c21/0_0.webp',
    promptValue: 'in the style of faramarz pilaram',
  },
  {
    label: 'meryl pataky',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/60775382-f45b-4eb4-a860-48185dd48ed8/0_0.webp',
    promptValue: 'in the style of meryl pataky',
  },
  {
    label: 'new leipzig school',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/151ed2d9-878e-4163-a81e-616e22df0bf9/0_0.webp',
    promptValue: 'in the style of new leipzig school',
  },
  {
    label: 'thomas ruff',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/ac5ee626-c4b7-4f80-92a2-2e824e0f9be1/0_0.webp',
    promptValue: 'in the style of thomas ruff',
  },
  {
    label: 'doug ohlson',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/26fd81b5-68b8-4862-aeb0-bfdafc382526/0_0.webp',
    promptValue: 'in the style of doug ohlson',
  },
  {
    label: 'mark rothko',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/4131862a-bfd7-43c2-93db-4360468d8a15/0_0.webp',
    promptValue: 'in the style of mark rothko',
  },
  {
    label: 'mr. thoms',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/a7de5014-2d62-4c45-a13f-1970690cc961/0_0.webp',
    promptValue: 'in the style of mr. thoms',
  },
  {
    label: 'mathilde denize',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/93122032-8fcc-4f41-8941-c31422a95601/0_0.webp',
    promptValue: 'in the style of mathilde denize',
  },
  {
    label: 'francesco vezzoli',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/580ed07e-bb0f-4a70-92d6-4d119ac3802b/0_0.webp',
    promptValue: 'in the style of francesco vezzoli',
  },
  {
    label: 'candice tripp',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/ab36300e-a78d-40e6-881a-95357db274b7/0_0.webp',
    promptValue: 'in the style of candice tripp',
  },
  {
    label: 'erwin hegemann',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/48a0eaa7-d22d-4137-8d0e-c652740d8c18/0_0.webp',
    promptValue: 'in the style of erwin hegemann',
  },
  {
    label: 'philipp keel',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/84bae797-233e-4115-a36e-5ad8a7a49483/0_0.webp',
    promptValue: 'in the style of philipp keel',
  },
  {
    label: 'dominique capocci',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/4faeb9f2-458f-409a-b901-6f910b8bcfe5/0_0.webp',
    promptValue: 'in the style of dominique capocci',
  },
  {
    label: 'rogelio polesello',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/ecc43e17-f7f4-4f1f-a885-31e996d96ef5/0_0.webp',
    promptValue: 'in the style of rogelio polesello',
  },
  {
    label: 'morten andersen',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/14b372c2-ec86-4e52-aeb9-86f854c47fbf/0_0.webp',
    promptValue: 'in the style of morten andersen',
  },
  {
    label: 'elevated mass',
    hint: '',
    checked: false,
    image: 'https://i.mj.run/736faa4d-ec97-4bc4-9e5d-487a3662ec2f/0_0.webp',
    promptValue: 'in the style of elevated mass',
  },
];

export default ArtStyle;
