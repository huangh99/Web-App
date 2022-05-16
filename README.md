# webapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
web_app
├─ .browserslistrc
├─ .editorconfig
├─ .eslintrc.js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-applypatch
│  │  ├─ post-checkout
│  │  ├─ post-commit
│  │  ├─ post-merge
│  │  ├─ post-receive
│  │  ├─ post-rewrite
│  │  ├─ post-update
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-auto-gc
│  │  ├─ pre-commit
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate
│  │  ├─ update
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ ending
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ article_comment
│  │           ├─ article_menu
│  │           ├─ artlist
│  │           ├─ community
│  │           ├─ curriculum
│  │           ├─ ending
│  │           ├─ knowledge
│  │           ├─ login
│  │           ├─ master
│  │           ├─ sign_in
│  │           ├─ song
│  │           ├─ todos
│  │           └─ video
│  ├─ objects
│  │  ├─ 00
│  │  │  ├─ 8bb82c9975393701a95b3fa978927ad498e9e2
│  │  │  └─ c61f9ebc891ac224d435260308b5cddde8f49f
│  │  ├─ 01
│  │  │  ├─ 4c9fb010b72cba9e9c29ec102aa175a8074efe
│  │  │  ├─ 61acfb77151533da6d0060c7c3a056d993bc62
│  │  │  ├─ d33dcd03eff24ce4a127053410f4c7046f4e9a
│  │  │  └─ e6480122603ab8d74cb11c2f33646771f0ab24
│  │  ├─ 02
│  │  │  ├─ 035c75d329992bc378a45f29435f8b4d24afa6
│  │  │  └─ 80d8183d06136cb505a515a380be5b43b8ae3c
│  │  ├─ 03
│  │  │  └─ 8e3a1c61592dd684192ca613161359d927527f
│  │  ├─ 05
│  │  │  └─ a58a5dc2b9ed743a9f1a523f5058f3673fda91
│  │  ├─ 06
│  │  │  ├─ 3829f1296cc44ddfa6b926eaefbce85d775272
│  │  │  ├─ ad6bbb3a824891ebe82b97ade2487f5f37329d
│  │  │  └─ f654ca1d2139dcb15424eb17f150536e2d13e2
│  │  ├─ 07
│  │  │  └─ b17c61a87ed22927a836f956f735608e5790eb
│  │  ├─ 0b
│  │  │  ├─ bc89fe025273afb5abb311040303268d4dfb34
│  │  │  └─ f35189c22997acd1cf964bc7dfe035f1c04461
│  │  ├─ 0c
│  │  │  ├─ 20a54f531b8c7cf8448925723e6913aca1f991
│  │  │  └─ fc6567d4857fe7b94abd5b68fc027a8c8f139e
│  │  ├─ 10
│  │  │  └─ 68f5ab97004a07c7b5211a9e807593a8751f3b
│  │  ├─ 12
│  │  │  ├─ 042182dfe59b86ab86bc9a533d15ab14da8e29
│  │  │  └─ 99305c8f308578d45569373ffbe0d752f99cbe
│  │  ├─ 13
│  │  │  ├─ e3577b0f9206ab4dbf26f124729606518a203f
│  │  │  └─ f6f8dabe4ac35bb86fbd4ce940bd365984b7cf
│  │  ├─ 16
│  │  │  ├─ 1e915b806162fa6bf9dc795307c694d487e632
│  │  │  └─ a42860331b2d19c122afc44f9c648318dc3730
│  │  ├─ 17
│  │  │  ├─ 16c71a46976ba7e57de42f6f70014a5e7be5a6
│  │  │  └─ f56716fe488fa8a1caa1163e270314b01716dc
│  │  ├─ 18
│  │  │  ├─ 15a8952b5bef38d45f30605a6147118de26cc5
│  │  │  └─ 783cacd194a5b347b92e74e75dc64e4224fc20
│  │  ├─ 19
│  │  │  ├─ 60174c4146b39a250ebb1bbf0b8d6ba8320743
│  │  │  └─ 7404838658a60ccb0bc0de4f50489c37b85fac
│  │  ├─ 1a
│  │  │  ├─ 221f08b57f21b5785ffbe98581f79b00841eb5
│  │  │  └─ 94ab8bb1a220e4e0f398323f8f632e43597195
│  │  ├─ 1b
│  │  │  ├─ 3341299ba96ff3609e7cc79484bc84d1238d6e
│  │  │  ├─ 6431583244be393210f670999f7633747946f5
│  │  │  ├─ 65f18de7baedd40e880002ac267fc7c43cab9f
│  │  │  └─ e1742b5490aed013c8701f3e2cc30dec231fc0
│  │  ├─ 1c
│  │  │  ├─ 0c529e21bf8a0706014c741cb7ff5495f22d82
│  │  │  ├─ 9188a214a22ef3191733531d184c342b75368a
│  │  │  ├─ ba8def8579c25aad9fab1ccc5a6a574d983117
│  │  │  └─ bc3fa9cde5ce820d9f1e36de1522ec12e0043b
│  │  ├─ 1d
│  │  │  ├─ 41505ba757470cd238beddd943ff3498aeb1d2
│  │  │  ├─ 6955eac499d6073b39fe3d702923565bcbc7f7
│  │  │  └─ f3adca3d7a78c43cb88b5c32f643837dce5bfa
│  │  ├─ 1f
│  │  │  ├─ 347605dc6d156d3951de84d63ae59e08a10b4d
│  │  │  ├─ 588edfbab1cd22954d9484157973d7e4d7501f
│  │  │  └─ c6704236f93bdfb2ca0385290fa0216b909c38
│  │  ├─ 21
│  │  │  ├─ 4388fe43cdfd7ce1c29cd3e401541ded620dba
│  │  │  └─ 5ed7f91e37b485fb5b9c0a109bf3ccd4c594a9
│  │  ├─ 22
│  │  │  └─ 8857b98c9c6c36018d6af56f57e06296382ff0
│  │  ├─ 23
│  │  │  └─ 09ceb68cacc1f84539099a158a62562956ce3d
│  │  ├─ 25
│  │  │  ├─ 2d9b21229be09cc13e7022f303fa8d99d40690
│  │  │  └─ c1efc88437a848e84966b373012151649ad420
│  │  ├─ 27
│  │  │  ├─ 518330c589d8aeffa9f7377a857f58a7666686
│  │  │  └─ b77d3d34929414fb063cc909b441ed78a4022b
│  │  ├─ 28
│  │  │  └─ f05e9e7610ea2e611280bd5c1e5c29f67a9eda
│  │  ├─ 2c
│  │  │  ├─ 1f5861f0723f4d3d4567c47ea60499a4cf607e
│  │  │  ├─ 6a7fa5a82e05ebc3c37faa5777e605cab0a875
│  │  │  ├─ 6d5c79ec87511b68cc585d31899078748951ea
│  │  │  └─ facac2469ab40c828f250747f5d8c34f9a973f
│  │  ├─ 2d
│  │  │  ├─ 1ce4a3300bfa03486891c3fb8effc02fb151aa
│  │  │  ├─ 4ae4a8dd33956e02c0c61c41a2a09a9afdcf9f
│  │  │  ├─ 50aec46f222295b91ca240f8f492ec89071c13
│  │  │  ├─ 86dc869ed1a1c9e3dc35cf3aefae2b18df80d4
│  │  │  └─ 8ec28a48d5d899175164fbde1ce7ce9fbcfa2e
│  │  ├─ 2e
│  │  │  ├─ f21b2d7784d8ce461ee2195871fc4388cb101b
│  │  │  └─ f7fbb8980c6cf3d77f6a4fd6d52a495cd46a23
│  │  ├─ 2f
│  │  │  ├─ 647ea4d9abedda9e4a31449782b1870d0948d0
│  │  │  └─ 8b0cb9f86120801ca657dc1c10da022a240e14
│  │  ├─ 30
│  │  │  ├─ 2a4e42594db8ad7e0a31ae1cda444b4d0b463a
│  │  │  ├─ 9e68d4d611956d5f61cad2e1cef450e8c3ab85
│  │  │  └─ a1b756fcf33b52f7d8a5d18a7865dba879536d
│  │  ├─ 31
│  │  │  ├─ 6565c1cc001074b80310eca452dc8d52f3724d
│  │  │  └─ a695f5f1478f62db3120deec89cd8023063a64
│  │  ├─ 32
│  │  │  └─ 120fd996486aa62faf47e02ab1fe532b910556
│  │  ├─ 33
│  │  │  └─ 2b916928b6051df5dc7286ead3e04ee067f4ab
│  │  ├─ 35
│  │  │  ├─ 1d14def67cd5e368bbe3a77c1d59430be0b073
│  │  │  └─ e33a1d4aa70c284144d414385aa109aa9c405d
│  │  ├─ 36
│  │  │  ├─ 80982714946975529efd1a492cec346a517ebc
│  │  │  ├─ 982a40577f75ce4d6b1c56eab13c7eda51ecbb
│  │  │  └─ fec69dda0f534eacee1096c634f61c81a109f6
│  │  ├─ 37
│  │  │  └─ 7b4c56fe40228bcb1eedbe5ed68f033b07e694
│  │  ├─ 39
│  │  │  ├─ 3c508d571b1988f43c9c44e9f463ab45a2ad3b
│  │  │  ├─ 8b52806e52d8db8cbae7a768e8395a6df083ab
│  │  │  └─ a28be0c81928637682ef71d256b9dd154ed8c3
│  │  ├─ 3b
│  │  │  └─ b6b83ac9c2eb3fb292e7a02e2309f1773542a1
│  │  ├─ 3c
│  │  │  ├─ 2d7fa997553f83d4db1b062f03b32eb9666fc8
│  │  │  ├─ 6d6f2e834dea14ae4ca9f0e7b8a481baf391be
│  │  │  └─ b2cc48b31240643dc40f6388f729fa07c72ba6
│  │  ├─ 3d
│  │  │  ├─ 0ba37da1068f6c5328fe06a49b53ec03599a60
│  │  │  └─ 90d20a307ecf9ffbf27df951c1423698f5c62e
│  │  ├─ 3e
│  │  │  ├─ 0515f45ce0228ed06a76be49e67cea27a501be
│  │  │  ├─ 5a13962197105f2078d2a224cc57dfa09b4893
│  │  │  ├─ 9383cb64632990d20cfad94a437b0ea52fcf96
│  │  │  ├─ d239ced17957a6222eeec8cbd63ceb04bce399
│  │  │  └─ df0c676a4ee5af7fb21d47c7959c9f8b0a1647
│  │  ├─ 3f
│  │  │  └─ a28070de24f2055171ca2e20543881cb7fdf1c
│  │  ├─ 40
│  │  │  ├─ 0c09646b35ec5a5d4ebffc2648ccd8366cab51
│  │  │  ├─ 3adbc1e527906a4aa59558cd582c20bcd1d738
│  │  │  ├─ 66473be862494327ed9f0ad2c090ea40f0ca26
│  │  │  └─ dd0672487346c864ce6cbb9df9bcfd8f0eb0d9
│  │  ├─ 42
│  │  │  ├─ 13b06c55cd93c220bb522f75470f774b53ec63
│  │  │  ├─ 25305b44425bf6d6bd0fc086121623ee5d8eb8
│  │  │  └─ 5e084fbf539d379cf301c41637a07c8cf5fdde
│  │  ├─ 44
│  │  │  ├─ 34041db596428517ecdea50b94858a5ebdcd47
│  │  │  └─ e0352526c7462b1ce429a7dd2b1880be3cdcb3
│  │  ├─ 45
│  │  │  ├─ 10bf482019845fa3d55616d702636cbcbb4f5d
│  │  │  ├─ 77be45286e4ed547d668149d404e4648260c82
│  │  │  ├─ 78f2dfb7499837589f8c250a045eca94225506
│  │  │  └─ bd0424778eba87b1cccb7b144a1b0269e48e4b
│  │  ├─ 46
│  │  │  └─ 12e23fda35a01bbc9df393a8a3fd98c381deaa
│  │  ├─ 47
│  │  │  ├─ 0fa84c980be0211e5f829612b65cc697a1b9de
│  │  │  └─ f79b0e453e7441e133ff2b61a1002e45fc91c3
│  │  ├─ 48
│  │  │  ├─ 6bc5ff4bad2da39577ed441895cbc727904af9
│  │  │  └─ c33f75ca1f32c04ef8ab1388de8f2349922197
│  │  ├─ 49
│  │  │  ├─ 14251fac8c679c1a22db8685ebd016bc3b1e3c
│  │  │  └─ 42111e8638697c827c1a8b437a534896eee1fe
│  │  ├─ 4a
│  │  │  ├─ 5be9bc5e0936f5c637219e45514b82398b555e
│  │  │  └─ e70a2fb0ecb1ed8678aeb97b469db00b490e23
│  │  ├─ 4c
│  │  │  ├─ 78bccd9428416c6ae910f6d432d396e449aba4
│  │  │  └─ f170fb4ab219c1877240f6263ac3b757fb7b34
│  │  ├─ 4d
│  │  │  └─ dc6ab3fed230ee9cfde96059abeb89d0eab3b2
│  │  ├─ 4e
│  │  │  └─ 3459794459078a4a9aa1702d60368bf140d04a
│  │  ├─ 4f
│  │  │  ├─ aca561a5b51526259cb147a832032366fe1665
│  │  │  └─ dc463331f72d926bf13329793dd359360c573b
│  │  ├─ 50
│  │  │  └─ 8002d5e42279b4fc1e11e31a475660870a6e2c
│  │  ├─ 51
│  │  │  ├─ 048e77a56b9bf733c6963cccbbbf60163bf92c
│  │  │  ├─ 16d8b2f71afd8101474330e47761c44ef80053
│  │  │  ├─ 1f38d953139a9ff926080c33edcbe69ed06da1
│  │  │  └─ 881fa1834ac7566cae1c749eb639e006e52b4c
│  │  ├─ 52
│  │  │  ├─ 618d3611e66b3e1be6555e2ee5218bc8551cde
│  │  │  ├─ 6ac2d813b19e0b306db4ccbe0d304419864632
│  │  │  ├─ 74c0690d9771b9fd8dd0c8fa725079699a36ed
│  │  │  ├─ 74d32a04b8fa78c7e9b5b4e6df5ba1fda7df4a
│  │  │  ├─ 8c06e61c31419c15c5fedd8edaa42dcacf40c2
│  │  │  └─ ee061872180172ee3cd60734154c7855abeeb8
│  │  ├─ 53
│  │  │  ├─ aa94e8654a22f0d13f5f35d8af3d3db03dddb7
│  │  │  └─ c388cbbae216e11bf3fefc64a0223b4b949b98
│  │  ├─ 54
│  │  │  └─ 7d6c4a58ae0aae7879fa6e3efd47983c54a267
│  │  ├─ 55
│  │  │  ├─ 0797d15c6e6b3cce43c4009d35383775761baf
│  │  │  ├─ 552748acf8ecb1ed46ca011ac595bfea45566b
│  │  │  ├─ 69f6f43d67b0995f0f3975462868acee64a87d
│  │  │  └─ f731b63ad0757c19e0f06bc25a31d8262a374e
│  │  ├─ 56
│  │  │  ├─ 05bdfc13d6c3cc12ce4559c8eac2cacb991664
│  │  │  ├─ 8c2d14e8c4576db634a531b993dac3544b6afb
│  │  │  └─ ac132039368210654ae0818bb967ad91b5d5f1
│  │  ├─ 57
│  │  │  ├─ b6a49bff2b1257f445f01ccfe4df7150c91533
│  │  │  └─ d876b02c269406e09f30c5880c9a9de219b10f
│  │  ├─ 58
│  │  │  └─ 2521dc3c6ffb594340b31b903be133573423dc
│  │  ├─ 59
│  │  │  ├─ 64a2c60046639e9e472c47b0ccd00005320510
│  │  │  ├─ e38e72c3234b872e7e31d14629dc3f8d3c3ba3
│  │  │  ├─ e884714eb5c5679e67a36b13c436fd407f7092
│  │  │  └─ f1f1a9b2293431af0a2295b669693cb4dbbdbc
│  │  ├─ 5a
│  │  │  └─ f459b0555b069f80f99cc61063aa957b0a434f
│  │  ├─ 5b
│  │  │  └─ 19e91921671ac77e19559feca1eddb5aaaf064
│  │  ├─ 5c
│  │  │  ├─ 25d73628ec70accd84f347f7eeb6e3f3dcb9d0
│  │  │  └─ 9aade1acdca93b87a2ae4486c4e54f72c823ce
│  │  ├─ 5d
│  │  │  ├─ 2b2198bc8e2302d4f31811e3135f4ccc41a7d9
│  │  │  ├─ 2f31bde961d82ae1405f68001a80065863a31f
│  │  │  ├─ 39b7c55f36d4e850361d121c40b296bb280819
│  │  │  └─ 7f4cdce8a1e82df1a94f53dfd1835aef92ae43
│  │  ├─ 5e
│  │  │  └─ 4a81a13ae2b8c100bc26c620bc607b227d744f
│  │  ├─ 5f
│  │  │  ├─ 1c7ab4f62e4ed1fefa67cb4027dca13d8f8104
│  │  │  └─ 332abfec066b0515f40b9f81bbee6f02158da8
│  │  ├─ 60
│  │  │  ├─ 7ee2ba903bb0336e4d4900b415e891c59deab3
│  │  │  └─ 904d42c51de59d263c557700bcf8db65bbbb00
│  │  ├─ 61
│  │  │  ├─ 52104209957ef7437cea0533bf5bc402a79b33
│  │  │  ├─ ec5f590386e142ca400c6f28d8bb8e0d4c5d94
│  │  │  └─ ff363b3f401043a103ad5ee898a4be23afa4dc
│  │  ├─ 62
│  │  │  ├─ 524a5493684dcd8356ff5e19be746dba8516f1
│  │  │  └─ d976d4bfa9f3f156936077171f700108de3abc
│  │  ├─ 63
│  │  │  ├─ 2ba04a659a9f04bdece50a7e41c4f1f91b7e57
│  │  │  ├─ 59d942275d28768f6fba63aaece5c65043fb96
│  │  │  └─ 5a853d0515b48460f310eb84ddbb2f6aa64418
│  │  ├─ 64
│  │  │  ├─ 4d2aeb8148d68e2aad9dad4818fbd796c2f9ed
│  │  │  └─ 57509de12202a7afd759ae7b2c2887c7d06d5a
│  │  ├─ 65
│  │  │  ├─ 10c6a45035b6573151ff6196e4bdea78deb75d
│  │  │  └─ 8d83c6395c475277e4f147571704101ac6bb4d
│  │  ├─ 67
│  │  │  ├─ 330c4ab3469bf6c3400cd1aa52b7458fae4ad3
│  │  │  ├─ 355ed4994fa954da942fb84e08f208ea085493
│  │  │  ├─ 84aaf159aff05727cb4564d7e6afd23765f1b2
│  │  │  ├─ c35b087f282ddf8b8e22a98b68f8e4c0118ad2
│  │  │  ├─ de5b3db10574e663f756b7fa7b30f256ddff79
│  │  │  ├─ e2f0f22da9a24bc7d1cd160b1da72a0226d16f
│  │  │  └─ fc99969bf792d0f004f8442972a3027f55648c
│  │  ├─ 68
│  │  │  └─ 40081c4c7061bf5ff46caa4e0088bf61b40443
│  │  ├─ 69
│  │  │  └─ 4bef710faba2dad8287110bfc1944579a98e0a
│  │  ├─ 6c
│  │  │  ├─ 67eb8b5a0f5579ed07e7a01250b5bed6a1d195
│  │  │  ├─ 76376f340d1c11370c635e4fd9820efd6b3a0d
│  │  │  ├─ bd1ab3f3077b0e2f69335b801d9335d493f8e1
│  │  │  └─ e007e27b87cf86dfb967869d162d58268ca11a
│  │  ├─ 6d
│  │  │  ├─ 29eaf990e620d6229659361a8a10d076277538
│  │  │  └─ 576c9457b168d53bd6aa8f538e05e20ac58f99
│  │  ├─ 6e
│  │  │  ├─ 0fd4e0f54c09e6d4a7a95020cf174b974d96ab
│  │  │  └─ 1707f81712d7df287d7b10c7daea293ad85ca7
│  │  ├─ 6f
│  │  │  ├─ a1d1b84e4a64dc980a6bc6130a80daa68627b6
│  │  │  └─ bb28da42b3482791ce7ad4209c782c2366b9e4
│  │  ├─ 70
│  │  │  ├─ 19bf2e2e39e3d8860b40839d93393d571bf2bf
│  │  │  ├─ 53c49a045c91bd8b3015c1cf3d1f6da21660d8
│  │  │  ├─ 725647bddf4035f8329a13bf7f4319c17478d2
│  │  │  └─ bf5b8cfd0da68fbf01e838228ade69dd76249b
│  │  ├─ 71
│  │  │  ├─ 17f998a764e40bf7800373988f92cb9d8a41f3
│  │  │  ├─ 7b078e982af9c2660accca11131b24287342ac
│  │  │  └─ 93413ae67e2632b19b5f90e4717172bcffd857
│  │  ├─ 72
│  │  │  ├─ 2aa6029528aa4886f9e45e102353fa2e6ff248
│  │  │  └─ 387502bf9411047cf05f1ca531b28296ca6818
│  │  ├─ 74
│  │  │  └─ 3d424bdf7aefda8c35e1a75dee6e51c12df3c7
│  │  ├─ 75
│  │  │  ├─ 1bf1b1f7c2f32501bfa7f8ad93e05e37d5b7f2
│  │  │  ├─ 570b38967826a36ad2708be3cc695b799d74fc
│  │  │  └─ 94a238e805daaa7bb7dbe5120ae9283490d61b
│  │  ├─ 76
│  │  │  └─ 302347390389b216cfb726b7a204063e215412
│  │  ├─ 77
│  │  │  ├─ 25c93d23bf57edf1d6164c589bf01515828f7c
│  │  │  └─ 47f4438a579fb05bfc32892c31df43819883ce
│  │  ├─ 78
│  │  │  ├─ 32989ce5e60814800f79acc4a9cd69f5ef72a4
│  │  │  ├─ 74dc255c8ddc190840b1d4baebd865cac758aa
│  │  │  └─ 7a6174e1b0482dbb2ea629a9b521e79fb745f3
│  │  ├─ 79
│  │  │  ├─ c73ee8ff36e78cc9a363e922275d001d7428e7
│  │  │  └─ ed7d19a41baee49364af903c432a6361c3a188
│  │  ├─ 7a
│  │  │  ├─ 7661bf8a8504f87e1478ad5b1d5da9a38e8598
│  │  │  ├─ 9e1cab4d4c41c29b834a160eae4f6982e4f770
│  │  │  └─ c935ed84dae13f069fbf2346aa64bff463f12e
│  │  ├─ 7b
│  │  │  └─ 2c9d32cd09906d40b798f8a2e14541b2b98a62
│  │  ├─ 7c
│  │  │  ├─ 0a72a518f0324029601b5ff56d6c46b846ada3
│  │  │  ├─ 935a4fd289dffb66d3c7fb8483527de356c507
│  │  │  ├─ e1405db12bf3073c763f9eaa376aada2f6c573
│  │  │  └─ e2b6832b197f06d6c732e6ee19fb26dcf12ca4
│  │  ├─ 7f
│  │  │  └─ 0c81aaf0e619ef796fd6fa353ef7783219d1d7
│  │  ├─ 80
│  │  │  ├─ 8a427ce6b1262c5a80276b9a8eba54e07e6dd4
│  │  │  ├─ a6cabaae4b12aed222b6e7285dd451dd090fbe
│  │  │  └─ ee2548f69e668c32ce159072d11b53c5f79aed
│  │  ├─ 81
│  │  │  ├─ 2f56a9bc7f8451a6ca75880517c5e9c2ce4cdf
│  │  │  ├─ 89af6ad480f94feb9ad1b8aa2dfe369938cd42
│  │  │  ├─ c1a7975c87c940d3e760ec834a7f403fa4723d
│  │  │  └─ df63c3fd27e3ea0ac27f1f2ff7b6ec2cf2cd7e
│  │  ├─ 82
│  │  │  ├─ 5ac002184a14b9120269fbfe577784fb0cfd52
│  │  │  ├─ a3653947a1d7190d7bc3e18955149ca487065c
│  │  │  └─ b7de9c52bb33eaa56368316be30dc6a46f30b5
│  │  ├─ 83
│  │  │  ├─ 8675fec895b30333fa6b39b47f247c908fb86c
│  │  │  ├─ 8d18e4fc25ab7d25e2f7e8b621705d49206608
│  │  │  ├─ bf6e57c2d5cfa3878ddd307125f640fb2347fe
│  │  │  └─ dded6dcad8b3642bfe28b0deaa4eb3810e50b4
│  │  ├─ 84
│  │  │  ├─ 22366c3d3d1e55dd9da98794fc47b4f6737736
│  │  │  └─ 4cf9655bd533c8f8f1dd1df836ffb31be0f0d0
│  │  ├─ 85
│  │  │  ├─ 0f4ab1b996351088badba62c5d12c6b7536e0c
│  │  │  ├─ 6df900272e6485a0dcbcb83cc5216d4097dec3
│  │  │  ├─ 8cd4d6269a3957e14c4e08b5eb19b661e2ea3e
│  │  │  └─ 961ee648abfe334e88caa371d3f741a2577402
│  │  ├─ 86
│  │  │  └─ 4bd3de185c7065b9506802733372840d4c69df
│  │  ├─ 87
│  │  │  └─ 09ae2d3c72ccd62739702bcb261140a13ebbba
│  │  ├─ 88
│  │  │  └─ 30a6e20fa8a9f4fa374e38b397d9cdd6dc38e2
│  │  ├─ 89
│  │  │  ├─ 503a8d5661c44c708af79bdaa12170b6a540b6
│  │  │  └─ 85b99134836c88a16850fa0f6326f23faca93a
│  │  ├─ 8b
│  │  │  ├─ 4dd30f8f23f471db18c6bb8476c53986c2623c
│  │  │  ├─ 9e7739ca91f1127e3edd2bd3c62daba0015634
│  │  │  └─ d6c57f306571c13dab5ce8ee5dab0d3e03eeeb
│  │  ├─ 8c
│  │  │  ├─ 79077b6c8e7d8493ea440d25b3811988847452
│  │  │  └─ 9591013ab3760cf1fa14d9b4945896fbbdd5cb
│  │  ├─ 8d
│  │  │  └─ f8991c113994d3e63b373b5416ebdd6a9ecc77
│  │  ├─ 8e
│  │  │  └─ bf51f7bf620fe8160ed8fd05e5dfdb13638386
│  │  ├─ 8f
│  │  │  └─ 115c16ab6566cfa6391c4460447ef375199f90
│  │  ├─ 90
│  │  │  ├─ 4f0f420a84c16e7f8f99ca7f272b48fdfd0e2d
│  │  │  └─ f45bbec0bb7652465b16f3be892fa3f109cc51
│  │  ├─ 91
│  │  │  ├─ 1f80014f6ac95fc8e06c431c9d4ddfd6947a66
│  │  │  ├─ 93a60ca153bf1fe3d262b87dc8239e8ba232fb
│  │  │  └─ e82f2fd8a584cd4fc49fbd37dc0336b6742d19
│  │  ├─ 92
│  │  │  └─ 3df006a9c9c7b22fbf450fb07e5d436f9f78c2
│  │  ├─ 93
│  │  │  ├─ 26d59a7266a9da473199523c3532278bb2d1b5
│  │  │  └─ e4220ac0da5cd7c0e9827bc55be584f73eb781
│  │  ├─ 95
│  │  │  ├─ 452df35ac422e90e2b41e4da4438f0d41d9c67
│  │  │  └─ 9df68033d5a85ff171d036a84fb5533acf7240
│  │  ├─ 97
│  │  │  └─ 6f916b14298bf027d82d460ace001939d2b552
│  │  ├─ 98
│  │  │  ├─ 008001f6a839503eb042f801d8b0b418a59c91
│  │  │  ├─ 4d03494432b43f7769cdfdc1804855d7c45580
│  │  │  └─ 8e45e5e62608afb4eaf478f32509028d25402e
│  │  ├─ 99
│  │  │  ├─ 2df47312480000860eb13f9e42f60927db5acc
│  │  │  ├─ 8143e708efd56fd4c0ff508a8c8173e288eb0a
│  │  │  └─ bf960e214e73e5513e054ac34c331b6d4b1a46
│  │  ├─ 9a
│  │  │  └─ 73a96287ba0f7d46d15341d845fc41e395f5b5
│  │  ├─ 9b
│  │  │  ├─ 928f57950183b20ec9a0a3acd086c55f540436
│  │  │  └─ b456b222f9ec2d7eb8cc2a9d85d596acd01e8d
│  │  ├─ 9c
│  │  │  ├─ 461820806ff3f1cf3b72e917f9bb64eb2841b7
│  │  │  ├─ 9130a0b789d9158d9367034707cbadfadc4d17
│  │  │  └─ caa0b44bd48c675c3957e911bd38773880b5af
│  │  ├─ 9d
│  │  │  ├─ 56594e4ba685375c7d03eda7420a0a19af7fd0
│  │  │  └─ 5f7f0cae401a8dce854d0e3d3fc348b1178192
│  │  ├─ 9e
│  │  │  ├─ 8ba3cb692d4f2712eef124bee01215af862868
│  │  │  └─ a08c66da376a7d6b0941903467a25da745541f
│  │  ├─ 9f
│  │  │  ├─ 30353642a4ebe322b34a4be72efb9c871b1f2e
│  │  │  ├─ 47137d974b8eb5fb56be312292cb88f329c881
│  │  │  └─ 6611df192057ab55e942be5be93e3b873f9495
│  │  ├─ a0
│  │  │  ├─ 0c0c7eaf2363021a44ea77e48e895af58bce2a
│  │  │  └─ b54f88c10234c629374c7e5c32ba9370607644
│  │  ├─ a1
│  │  │  ├─ 28437cfb739f8345316ba85c2f2936e94c3340
│  │  │  ├─ 75056fc7e389f14d850597d7c26f51546ed57f
│  │  │  └─ a37ab6fdc3b0663eb7cbc1b588d2125b9a0ad0
│  │  ├─ a3
│  │  │  ├─ 20246dc2c66b3ba965d17efb61caa98e7ba1c5
│  │  │  ├─ 2cbf10f2bad174144d5f1eb6416e9dfed5ac64
│  │  │  └─ e73ffa9e949ca444faaccab36aa4b936fcd2b8
│  │  ├─ a4
│  │  │  ├─ aeb3b87ae186c079b072ce12b27d595f7ecc95
│  │  │  ├─ b5fb54521fdf7c8a8ec3a950cc48ffbe301c87
│  │  │  └─ f9a7c288de548c36129a2b76f213b4bc80bcc0
│  │  ├─ a5
│  │  │  ├─ 035d140e9572643a872b8d8b3ccc5d9aa2159d
│  │  │  ├─ 31151167f36c3320bb13750b965b6c7ea3fc57
│  │  │  ├─ 38350f02bb3a80603109482e1b45444beaef0c
│  │  │  ├─ acc3caf884612a0060367df6985ed29f6edf1b
│  │  │  ├─ b5b7d637ef19b6fdbc7df7ac6937a5863f7129
│  │  │  └─ fd9f443ac9ac49dd1a08b9627fcc4bdae463c1
│  │  ├─ a7
│  │  │  └─ 4714f655aa7a3673debd0d1c385d0d88b0623e
│  │  ├─ a8
│  │  │  ├─ 6a4eb60a077774692bf6e897da723cee24e6be
│  │  │  └─ feea661c011a14c45ad49dd178c6da4fda8363
│  │  ├─ a9
│  │  │  ├─ 4cb1ff6db77b4d7e383470cc6716257af43ade
│  │  │  ├─ b1414b673f831c838eb354e520d90d015e684d
│  │  │  ├─ f42316ce51404f12c4201317a8a4553a69c310
│  │  │  └─ f43d94de93a82c94c92c7bca840216461916ce
│  │  ├─ aa
│  │  │  └─ 10aa714daf3ce52bd908227ec0597a94d3e0a0
│  │  ├─ ad
│  │  │  ├─ 0d3cd8ff18a25dfada5b0572fcf921490df9eb
│  │  │  └─ fb24a9282487c9afa0efb1e1be4f5e38aaa930
│  │  ├─ b0
│  │  │  ├─ a5dd38fca24d00dfbafe2c8c9bd4adcdf0567f
│  │  │  └─ dd0d6968057f30f3d3da5770e35705f073a0c4
│  │  ├─ b1
│  │  │  ├─ 380aa7f16acbc8490e17bbb0c1c2c767b97e4e
│  │  │  ├─ 47e99eba65b262ded2f4dc9c546769b8d9b0a9
│  │  │  ├─ 5634f6f7892d3c49467f2e6b3c3495cb118698
│  │  │  └─ b239a0209404700c7a9868d558c47da3a8df84
│  │  ├─ b2
│  │  │  ├─ 469db19897e7043168ea1f3e76cea5364eaeca
│  │  │  └─ e578b6a00cee034a891cce386ecd05917da7c5
│  │  ├─ b4
│  │  │  └─ ebe7ce32bf57f61aaa810eab42b62257febdd6
│  │  ├─ b5
│  │  │  ├─ 3edaa1624330b0af81d452e4e751e62168abb8
│  │  │  └─ dc07adf9f73de55fd486c182e39c0d2823160a
│  │  ├─ b6
│  │  │  ├─ 0ba50ef8a0b566366645639c17fd2d17d06760
│  │  │  ├─ 1c77d559a82a906c7166e6a7b2bce6ff65c67a
│  │  │  ├─ 595d239581ff37fde38712f8031c2cfaf6819f
│  │  │  ├─ 77ffe4b6086b8593a36ac2f3d7364c0866c57d
│  │  │  ├─ ac1b4b7127ece645019f811a13b451567079f5
│  │  │  └─ bb5e4203c4ac5dc102e76363bdf828d7f84fb4
│  │  ├─ b7
│  │  │  ├─ 0a39095b79f27a97067250c9ea9549e908bc8c
│  │  │  └─ a105096ec98e91ff9faee1e5fc7b1a0bcd5f25
│  │  ├─ b8
│  │  │  ├─ 14dc36b133da11f4e4f153b44f6967ff0d5206
│  │  │  ├─ 398399a7f53e6ce4ce6301910976ad841b892a
│  │  │  └─ 994c7d29d909ddebf6aa35ff63fe2daf7027cf
│  │  ├─ b9
│  │  │  └─ 0b035b9c540f141e88a53c197ca2f187b2ec98
│  │  ├─ ba
│  │  │  ├─ 44039c14c535f989e500441642a9ce1349f6b9
│  │  │  └─ ccd9125504f3b39c23c7b99194bccf17974bcd
│  │  ├─ bb
│  │  │  ├─ 5f401f4689c0bb77015278e011fb2a70f2a43e
│  │  │  └─ a99018a1c7ae6bedc7bbe893c44f25ca292b22
│  │  ├─ bd
│  │  │  └─ 3695b4da83d7ead1ab5ae732657eb8d3e3389f
│  │  ├─ be
│  │  │  ├─ 11a1735bf0444e9b2adc9972362b8fee078def
│  │  │  ├─ 2a354b3ad7cb983ce213404bc8255fa4abbbdf
│  │  │  └─ d97d9edf38a646c1dfb80613c920364e90e066
│  │  ├─ bf
│  │  │  └─ 879149bda1c9bea2e41ae871bec0d3f3810fa9
│  │  ├─ c0
│  │  │  ├─ 6dd1392d7540c2e5fc1c263ebc0e060fb2df0b
│  │  │  └─ e5927df5c7c1f7a3e0e1d34ddbaabdf91963c8
│  │  ├─ c1
│  │  │  └─ 0bbee53ebfd8af0a3ea415d36e477e7ad472c0
│  │  ├─ c2
│  │  │  └─ 61655051980155caddf536a0bb2e4a3381fff0
│  │  ├─ c3
│  │  │  ├─ 60fcfef767e2726cf40dc091856de22c4fa9a6
│  │  │  └─ 92660afa14a3a4a3f7d96fac4e726bab6435d2
│  │  ├─ c4
│  │  │  ├─ 54ca982e154581b5f08a61ff9fd583a2be2bfa
│  │  │  └─ 924029f5453aabe5f62be6fede056e694e1d34
│  │  ├─ c5
│  │  │  └─ 8d1d28d0d8f20f293919084b0cae61700d8276
│  │  ├─ c6
│  │  │  ├─ 119b1cff6e58c076fe5ad851b6a3c864ef53be
│  │  │  ├─ 2a4b0f1a2736fbbe8e50ed9c3cc1792236752e
│  │  │  ├─ 33909dbb7854b0a222681d3542b09eb06b1820
│  │  │  ├─ 73c6b2f7568b80febb7a8f64a8f2edb2991fdf
│  │  │  └─ a5e0514d3162bc0131c5bcb46d46b1071d58ae
│  │  ├─ c9
│  │  │  └─ cd703dab4996d64aa2907610502541c0cf3f69
│  │  ├─ ca
│  │  │  └─ ac6351f869f73a288ae8c3c362a365ae926055
│  │  ├─ cd
│  │  │  ├─ 1aa8d089ce845e6685f465906d351516c300e0
│  │  │  ├─ 8361fddefcf864836173feb9c0e23c8e0dd9ca
│  │  │  └─ f518010fb08d0a477ed69ec1836abc1f3348cc
│  │  ├─ ce
│  │  │  └─ 3052de4835124c6746cb664635029b10e7383d
│  │  ├─ cf
│  │  │  ├─ 6baca9e6fce95b94cdd53c96af0472b14e59a8
│  │  │  └─ ae67863bb13629926ebee8a1e0ea33b59401f2
│  │  ├─ d0
│  │  │  ├─ 185f63ce42a1b94d129177f2d1e029bea6bc43
│  │  │  ├─ c7f96e8aaa18aac3f0cbaff1b28b240cc010fb
│  │  │  └─ c833e9d473cfcdecf9ce36ef026113d9f4fede
│  │  ├─ d1
│  │  │  ├─ 66524b49c83375f6f2ef0e96f309a7b09ec024
│  │  │  └─ 9a0b0a704480e3ed8371ebf713b584b1848545
│  │  ├─ d2
│  │  │  ├─ 39ab5047fb39483b7cb829c07f9ecce9c2bead
│  │  │  ├─ ac06b6d1f9179807a52ecb0e7df8ccd7173e36
│  │  │  └─ bb5140072c055b6574786268e0e6354c311876
│  │  ├─ d3
│  │  │  ├─ 099db0646bac8c68d126b4668036c20e399d70
│  │  │  ├─ 2e02134764782c47e7e251f407eb8374b6ef7f
│  │  │  ├─ 5cfe388d30705352126b463f4d92aff82f1574
│  │  │  └─ df9090901149e517324fe13dda8f56a674e19a
│  │  ├─ d4
│  │  │  └─ 5c32e2a45184eaebea19d75d51af81d8ded818
│  │  ├─ d5
│  │  │  ├─ 0e7e727b766126f9b397d97f50b18c1fde2443
│  │  │  ├─ 8c2a4a734941cb0659ce7b5d3ac98b58e0a537
│  │  │  └─ be8dbb183bb891d0695cdc959fd80af0138451
│  │  ├─ d6
│  │  │  └─ 51129eaaa71c28a14cb886796e26dde64533aa
│  │  ├─ d7
│  │  │  ├─ 134dfe69916bff2055866ff95b3de74e63774b
│  │  │  ├─ 374604d7dd6de80e259eac67e4af649afff964
│  │  │  └─ 57a096845ba2896e41f500dd29b93846c1c340
│  │  ├─ d8
│  │  │  └─ 4e3eb71d821f4171679dccf72383b82b4b5b54
│  │  ├─ d9
│  │  │  └─ 6bcbd32a0aae135168ecd7701aa391412e17e3
│  │  ├─ da
│  │  │  ├─ 33b03a65301f30d7b0686c7d5bb82d2ef5401d
│  │  │  ├─ b3ee502b7d8ae0f11e4414cfcb68a8047fc63f
│  │  │  └─ caba604bf97c47854280011e006fce7158e22b
│  │  ├─ db
│  │  │  ├─ 53384be9bd57c2d4a548898be2f99689942f88
│  │  │  └─ 97771c87515cc4eaff31646cb7107ae7ebae97
│  │  ├─ dc
│  │  │  └─ 24d238f67595413847000e40f939aa6cdb249e
│  │  ├─ dd
│  │  │  ├─ 04c398132a892eb61913f2a3acd996e53cfaa0
│  │  │  ├─ 78f3772e1671a893e6966e3bc3e2bbc22296f5
│  │  │  └─ 8d9796d1903639bf54745bc1c57282269f6434
│  │  ├─ df
│  │  │  └─ 36fcfb72584e00488330b560ebcf34a41c64c2
│  │  ├─ e0
│  │  │  └─ 95f891001ca8adcad3089bf36cca50084d1d59
│  │  ├─ e1
│  │  │  └─ 4ed8cede00cd3edb590909f7b538e3870d6b55
│  │  ├─ e2
│  │  │  ├─ b9cd41a26d7aeefec30c6a48e5d83f57a731d6
│  │  │  └─ c1023109a9720d0109c1777e01fe52311274f1
│  │  ├─ e3
│  │  │  └─ c6d768d3c11ea97ac37137b0ed30fb68ed9141
│  │  ├─ e4
│  │  │  ├─ 4cdcd855cdcbfe33ac6782a0225f89dd48ee31
│  │  │  ├─ 87cc3bf04259a0adf3d49f1d9ada29709081aa
│  │  │  └─ d9b9a5f7a194c661c0c10350737379b2eea060
│  │  ├─ e5
│  │  │  ├─ 7d8c82472fe5c4af9215f04d207905ea8b73f4
│  │  │  ├─ 9fccfae9cd6b70cb34677e1e1270e958ecc493
│  │  │  └─ d806bc57ce57adb0f3f36c1bf9cd269f79e0de
│  │  ├─ e6
│  │  │  ├─ 48a910c68a9291682e67d6173b17af5d3e24d7
│  │  │  ├─ 80d5d1fdddf5a28db55dc1885a0b0b3f7a0c43
│  │  │  └─ d159d26cfaa40d1255c7544042fd2a31c8d77c
│  │  ├─ e7
│  │  │  ├─ 8f0a3fd4e86ae9cd4ef670f168d80dbf2f1e16
│  │  │  ├─ ae4916e393e0ba40a7d960c818ce17cf484f5e
│  │  │  └─ e9f0ae92f18fb508a1d12f8012879cb1410b69
│  │  ├─ e8
│  │  │  ├─ 339eb6b38a7345300ccb6b4b2d5580234ede7c
│  │  │  ├─ 549c781b4531bb050955055e0a9cdf29705407
│  │  │  └─ a4e3c4bf502006bbbc945db6555b2410837a97
│  │  ├─ e9
│  │  │  ├─ 0a6aa3b3c968a7e382b4a61304a6a4f1efa251
│  │  │  └─ 558405fdcc02f12d757acb308e02937a7444f1
│  │  ├─ eb
│  │  │  └─ d0cddef392ab311e5e0675f0d547d885346e62
│  │  ├─ ec
│  │  │  ├─ 0dd4a17e207da1ada000fdb802b6549f0836e2
│  │  │  └─ 981b034eb8ae8fd9c712e859ca7c26c9be62e1
│  │  ├─ ef
│  │  │  ├─ 5c5c5d6688b5068b26d10bc9f366e6520cf457
│  │  │  └─ 85bb1e4e946a4a36e848e6c97150e7d3641d71
│  │  ├─ f1
│  │  │  ├─ 67edac2f06e254315df8397122a65315917043
│  │  │  └─ a85a010f6f7daa619246a676c32d4296f5537f
│  │  ├─ f2
│  │  │  ├─ 0d6c3161c9223b2608ba39b1eaf2d3ebad6fed
│  │  │  └─ 5345696713d1bf0ab7b359da6ec17acf417b2d
│  │  ├─ f3
│  │  │  └─ d2503fc2a44b5053b0837ebea6e87a2d339a43
│  │  ├─ f4
│  │  │  └─ d407f5aaa46e5ad4a21e97da22c36bc7b57cdd
│  │  ├─ f5
│  │  │  ├─ 7ebd31b7988f479491198c51b5a79061bd1f65
│  │  │  └─ 958a171fa9edea7c349c47d4712d98d4444a44
│  │  ├─ f6
│  │  │  ├─ 77ed5468daa4ea7b42d2fd4ec871aba8c03c11
│  │  │  ├─ a98a14777f7f1da29469cf61264473069567f2
│  │  │  ├─ afa3738f8dad434ad448336a658e2b08e2473c
│  │  │  └─ ccdddf06b5b849130181130ac4064d922257c6
│  │  ├─ fa
│  │  │  ├─ 26795f13126abfac83cbde86696c6190761ab2
│  │  │  ├─ 4629fc6d5628a3f3826cd8171a711b69fc5d29
│  │  │  ├─ 9101f6cd4fe0c9aeb640025e4e66d87e71e64e
│  │  │  ├─ adfe5858d521dfae431c3270d03d6a8727f7fb
│  │  │  └─ f442173a02672833a23836f93260bd51910a13
│  │  ├─ fb
│  │  │  ├─ 6e9dad6b40ddb71fa2031716ac88348a710075
│  │  │  ├─ c4a84e4d994e54607adb6489e6b48b377aafda
│  │  │  └─ d35dfd5c5ad72ad238ed67f9d6b2815da196bf
│  │  ├─ fc
│  │  │  └─ a5fd285f3d3cf68f16997ca35bf47660557256
│  │  ├─ fd
│  │  │  ├─ 440106da6b20b1998403dc4e332211f78e01ec
│  │  │  └─ 83a2fe0fa05a01abd8822a03239df5cb7b4aeb
│  │  ├─ ff
│  │  │  ├─ 2a87d4d4e18299363e21a3d5b17f3e14269fa7
│  │  │  ├─ c05c842429dae4a85c30712cc32658efbdd8ea
│  │  │  └─ d7d240ae17bf45415252faa040458d4a1463bd
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ ending
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     ├─ article_comment
│     │     ├─ article_menu
│     │     ├─ artlist
│     │     ├─ community
│     │     ├─ curriculum
│     │     ├─ ending
│     │     ├─ knowledge
│     │     ├─ login
│     │     ├─ master
│     │     ├─ sign_in
│     │     ├─ song
│     │     ├─ todos
│     │     └─ video
│     └─ tags
├─ .gitignore
├─ babel.config.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
│  │  ├─ articleAPI.js
│  │  ├─ otherAPI.js
│  │  ├─ userAPI.js
│  │  └─ videoAPI.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ images
│  │  │  ├─ banner1.jpeg
│  │  │  ├─ banner2.jpeg
│  │  │  ├─ banner3.jpeg
│  │  │  ├─ banner4.jpeg
│  │  │  ├─ banner5.jpeg
│  │  │  ├─ banner6.jpeg
│  │  │  ├─ cat.jpeg
│  │  │  ├─ default_user_pic.jpeg
│  │  │  ├─ score_banner.jpeg
│  │  │  ├─ score_bgimage.jpeg
│  │  │  ├─ sign_in_bgimage.jpeg
│  │  │  └─ todo.jpeg
│  │  ├─ styles
│  │  │  ├─ iconfont
│  │  │  │  ├─ iconfont.ttf
│  │  │  │  ├─ iconfont.woff
│  │  │  │  └─ iconfont.woff2
│  │  │  └─ iconfont.css
│  │  └─ video
│  │     ├─ video1.mp4
│  │     └─ video2.mp4
│  ├─ components
│  │  ├─ AnswerItem
│  │  │  └─ AnswerItem.vue
│  │  ├─ ArtComment
│  │  │  └─ ArtComment.vue
│  │  ├─ ArtItem
│  │  │  └─ ArtItem.vue
│  │  ├─ ArtList
│  │  │  ├─ ArtList.vue
│  │  │  └─ SearchList.vue
│  │  ├─ ChatItem
│  │  │  └─ ChatItem.vue
│  │  ├─ InquiryItem
│  │  │  └─ InquiryItem.vue
│  │  ├─ NavBar
│  │  │  └─ NavBar.vue
│  │  ├─ ToDoItem
│  │  │  └─ ToDoItem.vue
│  │  ├─ VideoComment
│  │  │  └─ VideoComment.vue
│  │  ├─ VideoItem
│  │  │  └─ VideoItem.vue
│  │  └─ VideoList
│  │     └─ VideoList.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ store
│  │  └─ index.js
│  ├─ utils
│  │  ├─ functions.js
│  │  └─ request.js
│  └─ views
│     ├─ AIChat
│     │  └─ AIChat.vue
│     ├─ ArticleDetail
│     │  └─ ArticleDetail.vue
│     ├─ Community
│     │  ├─ Answer
│     │  │  └─ Answer.vue
│     │  ├─ Community.vue
│     │  ├─ Inquiry
│     │  │  └─ Inquiry.vue
│     │  └─ InquiryDetail
│     │     └─ InquiryDetail.vue
│     ├─ Home
│     │  └─ Home.vue
│     ├─ Knowledge
│     │  └─ Knowledge.vue
│     ├─ Login
│     │  └─ Login.vue
│     ├─ Logon
│     │  └─ Logon.vue
│     ├─ Main
│     │  └─ Main.vue
│     ├─ Music
│     │  └─ Music.vue
│     ├─ PointExchange
│     │  └─ PointExchange.vue
│     ├─ Questions
│     │  ├─ AnswerResults
│     │  │  └─ AnswerResults.vue
│     │  ├─ Questions.vue
│     │  ├─ QuestionsList
│     │  │  └─ QuestionsList.vue
│     │  └─ ResultDetail
│     │     └─ ResultDetail.vue
│     ├─ SearchResult
│     │  └─ SearchResult.vue
│     ├─ SignIn
│     │  └─ SignIn.vue
│     ├─ ToDo
│     │  └─ ToDo.vue
│     ├─ User
│     │  ├─ About
│     │  │  └─ About.vue
│     │  ├─ Curriculum
│     │  │  └─ Curriculum.vue
│     │  ├─ Help
│     │  │  └─ Help.vue
│     │  ├─ Information
│     │  │  ├─ cities.js
│     │  │  └─ Information.vue
│     │  ├─ Security
│     │  │  ├─ ChangePassword
│     │  │  │  └─ ChangePassword.vue
│     │  │  └─ Security.vue
│     │  ├─ User.vue
│     │  └─ UserSettings
│     │     └─ UserSettings.vue
│     ├─ VideoDetail
│     │  └─ VideoDetail.vue
│     └─ VideoShow
│        └─ VideoShow.vue
└─ vue.config.js

```