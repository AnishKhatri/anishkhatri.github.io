'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d09b81ef47dc815adbbda7f50ec1126e",
"version.json": "7fedd67936b9d2fb4be82c48ce49ef52",
"index.html": "e51674620f4f494dec1dab5eed2cba8c",
"/": "e51674620f4f494dec1dab5eed2cba8c",
"main.dart.js": "ba6824e5829502b7d9c7ff3489846cb0",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "575d41f80d0266d743f2f18162ccb6ac",
"icons/Icon-192.png": "0b158bfa20a6f74ae7baecc5cc1cfe94",
"icons/Icon-512.png": "66ab1758ba41ef9b5d74db0367eccc60",
"manifest.json": "26b7d8df216cfe70a19a233bb58f990f",
"assets/shorebird.yaml": "b2757fc8e77fbcf630bcc03da740999a",
"assets/images/maintenance.png": "e342c32097705e6e281a527ad45bc1bc",
"assets/images/misc/loader.gif": "6b165706026a6f82915a5ebc8e2ee957",
"assets/images/misc/white_arrow.png": "2707c5f7205ce840a53892007d10c209",
"assets/images/misc/hourglass-loading.png": "70dec3304934327f6bfb50dc9ab60d1b",
"assets/images/misc/idea.svg": "100c9316f4fbe6994cf4ca85625b105c",
"assets/images/misc/confirm_icon.svg": "aa4463323af2f58dd37173b5e92f561c",
"assets/images/location-error-icon.webp": "693dd647cde9e35e73d9b2303550c12b",
"assets/images/add_cash/info.png": "6758585b374f67166f9af39f3eedf249",
"assets/images/add_cash/bonus_icon.webp": "ff91c5d4cc48a97b4da53aa5e4f77c98",
"assets/images/add_cash/scissor.png": "de2ec5342cd55a40fde9b4444aaf4970",
"assets/images/add_cash/offer.png": "303c011c7aa25206903399171a04ee8f",
"assets/images/add_cash/cvv_info.png": "99018e99b0c28227d945a98614465a14",
"assets/images/add_cash/instant_cash_icon.webp": "d530b555a6f3ab0596c72e79c33b8fc0",
"assets/images/add_cash/add_cash_confetti.json": "7ad235b7131dbdca2ec6ae3d15b3aa32",
"assets/images/add_cash/failed.png": "40b464ea6e38a3325820e5c2d71df7c4",
"assets/images/add_cash/add_card.png": "41524f6df65a26d728b35912b8d0af4d",
"assets/images/add_cash/promos.png": "4ddadaf76dda28f3b0a75847b760a469",
"assets/images/add_cash/verified.png": "bf55cf4d2ec61f8234b2e259fe8b7cdb",
"assets/images/add_cash/no_promo.png": "e9360e970600e8488510d4c26831242f",
"assets/images/add_cash/ticket.png": "6968f04c1fc4feadc76ca2337497e993",
"assets/images/add_cash/money_emoji.png": "dc03445e5956a5a38ebdba9bb856d6b0",
"assets/images/add_cash/instant_cash_bg.webp": "afbc2de6abbae9d4431cae28a1895ecc",
"assets/images/add_cash/party_popper.png": "0653f633e9179078dab234c6bb671c37",
"assets/images/add_cash/bonus.png": "5793dd798f828313a247d2911b1707eb",
"assets/images/add_cash/hot_deal.png": "96a88dcf65246254f9561ec8399b97ac",
"assets/images/add_cash/instant_cash_and_bonus_icon.webp": "1301e8a5a6b29ca1045624ee48679152",
"assets/images/add_cash/scissor_black.png": "1a32c1d0d87f4996d8a84e908cefebf8",
"assets/images/add_cash/bulb.png": "4a78d2752580cb150134223043856195",
"assets/images/add_cash/selected_tile_signifier.png": "74f9f3b28d0f718b46c7b7751199cdb7",
"assets/images/add_cash/instant_cash_and_bonus_bg.webp": "616eeeec52eaea1586b54475bbb0b48c",
"assets/images/add_cash/bonus_icon_no_shadow.webp": "0afe2739213a7ada2dd09083f92c1052",
"assets/images/add_cash/confirm.png": "3ecd7800fbe4367738e58c073ff9103e",
"assets/images/add_cash/exclusive_offer_tag.webp": "2e4a3d0e47543ec4953d732162d0185d",
"assets/images/add_cash/amount_path.png": "7aa8a6ebbe349c5cc3d7643c95a58c2b",
"assets/images/add_cash/gift.png": "800f7458d79b9da8ece48c66ed0bf306",
"assets/images/add_cash/best.png": "20f2586cb86486f873fec222949350ce",
"assets/images/add_cash/trust.png": "d16a8a65890720008911c4eaadda1b8d",
"assets/images/add_cash/hot.png": "c0a97a8b707fb136c1a0373e866300ad",
"assets/images/add_cash/delete_card_icon.png": "e228390d3a245628d4317fa97358ec0d",
"assets/images/add_cash/arrow_down.png": "53b530095525551500a3f80bb5ff0980",
"assets/images/add_cash/badge.png": "74532fca2326dc4bf33d94847a98f497",
"assets/images/add_cash/popular.png": "e4cbde25e3b313eaabdc28e1d7f68c84",
"assets/images/add_cash/save_card_securley.png": "096b7309f18e2fdcee8e761bfa32caba",
"assets/images/add_cash/pending.png": "09ea820c1ec2d1e3b4ed8a0a687475d1",
"assets/images/buttons/floating_widget_image.png": "6901c8ef2f843c350541a56f4b71c15e",
"assets/images/buttons/active_tab.png": "5f398a945281eb9636bf7f0494b5f34a",
"assets/images/buttons/close_icon.png": "3426e770e4185036b53d37820c2aabb1",
"assets/images/buttons/inactive_tab.png": "2ed0596729520baf6256422489234387",
"assets/images/question_mark.png": "1f293b1460436bdc0fc743dbc5c14f0c",
"assets/images/game_loader.gif": "a1999c823f4960d9a40d459573bd9934",
"assets/images/chips.png": "42133c145f4602466fd8c94f793c7b3e",
"assets/images/tickets.png": "ee475c14cfd1636d2e488cb904a9a62c",
"assets/images/account_summary/bonus_sheet.png": "082ebe4ce6b08d5e89f046f8b70216ca",
"assets/images/account_summary/deposit.png": "6b96c88b3ae258d9f4fb5478e91861ec",
"assets/images/account_summary/info.png": "b00bd14289f09f2548c8fd2ff7ac0afa",
"assets/images/account_summary/arrow_right.png": "09ed578f304941aeb628f0e181be32ed",
"assets/images/account_summary/play-icon.png": "fada04c3c0440c96665df090c2fb881f",
"assets/images/account_summary/rummy_cash.png": "d0a8c993480f1b8acdd60b991ef10143",
"assets/images/account_summary/total_ic_sheet.png": "43db2b58d7d38b28df73349909b9c5f2",
"assets/images/account_summary/gift_blue.png": "43db2b58d7d38b28df73349909b9c5f2",
"assets/images/account_summary/ticket.png": "056cc7e76e8a39edb9106fb3047f0a14",
"assets/images/account_summary/locked_bonus.png": "71e9054186bcd256f591d19a5df56572",
"assets/images/account_summary/tickets.png": "ee475c14cfd1636d2e488cb904a9a62c",
"assets/images/account_summary/bonus.png": "3f495bb1073c1082d28b357e526a9964",
"assets/images/account_summary/memo.png": "b13aa577a08ebab8d0a0d2f99ded7fe8",
"assets/images/account_summary/gift.png": "082ebe4ce6b08d5e89f046f8b70216ca",
"assets/images/account_summary/doc-download.png": "b13aa577a08ebab8d0a0d2f99ded7fe8",
"assets/images/account_summary/winning.png": "837c2c9e3fa2cf74eeb414cb664f5934",
"assets/images/account_summary/idea.png": "9625cf17677ef700f973bc7f247f50a7",
"assets/images/account_summary/poker_cash.png": "ae41b72d3ba59c59b572fd98c9b49a3b",
"assets/images/account_summary/fantasy_cash.png": "d0763d374c8d66a53674ef6389a6d4ed",
"assets/images/account_summary/total_ic.png": "9d74b533495dfbbf4aaf64c7622be5af",
"assets/images/account_summary/arrow_down.png": "aa64cce61e72de4a4f090882be394da2",
"assets/images/upi-typography-logo.png": "72d7ec144ef8f2a089b6014e01f6b4d8",
"assets/images/account-blocked-icon.webp": "3dec2bfbe72eb3aef2e3f42a1b606110",
"assets/images/cash-txn-error-icon.webp": "d9db2837e23b00b81b5aa2be8bb16461",
"assets/images/splashscreen/splashscreen-nobot.jpg": "37e639b93a9445d976e4ef1806426122",
"assets/images/preloader.png": "ac35d03766828b59ce957b0dfaf9eaf4",
"assets/images/common/appdrawer/account_balance_wallet.png": "769166cb4c2f6502099e15601a6ad6c9",
"assets/images/common/appdrawer/trophy.png": "d6d53efecb7bb027c17112e95dfc1919",
"assets/images/common/appdrawer/account_circle.png": "b343324ebbabc382c660c531fc5efe6e",
"assets/images/common/appdrawer/support_agent.png": "d4531f3f236d2f7bc58eca0a795cc092",
"assets/images/common/appdrawer/privacy_policy.png": "cd5e97f984fd6fdfaddcc6cac742054a",
"assets/images/common/appdrawer/how_to.png": "4b90f628f32052d5aebe38d198078963",
"assets/images/common/appdrawer/folder_shared.png": "97ef235a6044da0e8f3b35f340ad8dd2",
"assets/images/common/bottombar/deals.png": "a45157f546a0f1db5c6325390cee91a7",
"assets/images/common/bottombar/more_selected.png": "ee74ecd1446f7baa27177a0b253e8369",
"assets/images/common/bottombar/add_cash.png": "89d770020566b6baa32273b62f81d190",
"assets/images/common/bottombar/add_cash_selected.png": "2b200fd3e7c6d2a47b4e323b361346f6",
"assets/images/common/bottombar/deals_selected.png": "2af87f013c843eed5b3dce25a41e6c92",
"assets/images/common/bottombar/more.png": "ee74ecd1446f7baa27177a0b253e8369",
"assets/images/rummy-account-blocked-icon.webp": "620aebb5212059b7a1d9565b3a054188",
"assets/images/earncash/message-icon.png": "67f097bb43c32ae8e0a46082cee7d8ab",
"assets/images/earncash/contact-book.png": "65d28754a6b2e63f48a63ca76587220c",
"assets/images/earncash/icon_phonebook_green.png": "c56889e68327481b54d38303c8dd5f99",
"assets/images/earncash/whatsapp-icon.png": "7e47facaa840036db0c3e122f800cb01",
"assets/images/earncash/copy-icon.png": "2eb4469baf284b1a86a99551aa7f038b",
"assets/images/earncash/more-icon.png": "1ccbb05dbeb98d9d75c2945cd4596db4",
"assets/images/earncash/telegram-icon.png": "71ff86120a4ac9de371b0ff960ce88ad",
"assets/images/earncash/whatsapp_white.png": "b043fe17aae8b8ec38b6b6d29e44b098",
"assets/images/earncash/whatsapp.png": "7ab55774f81839f2f3efc34bc4e95681",
"assets/images/earncash/icon_video_banner_re_play.png": "d50873bf357c391f150f6450baf92252",
"assets/images/earncash/icon_video_banner_play.png": "126ca60c07422c0de4c20d1f0ea8bc25",
"assets/images/earncash/earncash_copy.png": "5f0551023ab8d9f494cb837a42695792",
"assets/images/loading-img.png": "f9327c60b414995ec2cf3ee8e29fc28a",
"assets/images/signin/account_restore.png": "1f38d5d85c8d83d4bfc6896525e7c4c1",
"assets/images/signin/fair-play.png": "63a01e0055a03558864b072e797c7947",
"assets/images/signin/withdrawal-icon-register.png": "882be67a0bc72e6a11671966c93c9691",
"assets/images/signin/100-legal.png": "d2deab8f82b46b254830cbc62545ec19",
"assets/images/signin/cross_icon.webp": "4cc6eae0343a254f0d1438af776e54bb",
"assets/images/signin/legal-icon-register.png": "6de25ca025e6d0349c287b78b757ffe3",
"assets/images/signin/instant-withdrawal.png": "4c0215e22a07a65a9b9a803a4d5ef474",
"assets/images/signin/no-bot-certified.png": "92738051692077137e14466543d9c83c",
"assets/images/signin/policy-icon-register.png": "20a7a50a384a56c079e51b89e43568b3",
"assets/images/profile/star-badge2.png": "5cc137e9edac4df716e203d5bb12690f",
"assets/images/profile/star-badge3.png": "a121d01eaf59271615caabd29ee3ec45",
"assets/images/profile/play-icon.png": "654238ed5008e1c5b7ca286d716eaa36",
"assets/images/profile/star-badge1.png": "3f02b9fe45141560811b9209b3bab35e",
"assets/images/profile/star-badge4.png": "161b10b879575d8ab67fdfa8c1d577fc",
"assets/images/profile/trophy-icon.png": "57218b697af83313415c3823f67503e8",
"assets/images/profile/verified.png": "1614c2d96cc099f884626e8f7febccd0",
"assets/images/profile/rummy-icon.png": "8fff8216231a059c9428769ff3d51a19",
"assets/images/profile/save-icon.png": "6e704639f100fcc3ce2067a457a5e8c8",
"assets/images/profile/game-icon.png": "628916dbfc94893dd8bfcdc7cbbaf618",
"assets/images/profile/poker-icon.png": "5481b493202ace182f5606fcd3b8f081",
"assets/images/profile/howzat-icon.png": "5b5fd90717339a198bd09bd1bb0e6233",
"assets/images/profile/info-icon.png": "a172e0be688e775a4d967cdf343fcd20",
"assets/images/select_payment_method/card.png": "6d8d9c1760033ae62b11c2cdfefa6b1b",
"assets/images/select_payment_method/gpay.png": "01f39ca5bdc0b5aa87dfdbeb790c395e",
"assets/images/select_payment_method/verified.png": "bf55cf4d2ec61f8234b2e259fe8b7cdb",
"assets/images/select_payment_method/phonepe.png": "f75ab452dd5fbf02b1d59e1fe3646df2",
"assets/images/select_payment_method/paytm.png": "a010165410a021bf4ab08ec11dd7a302",
"assets/images/select_payment_method/upi_fast_and_secure.svg": "3f06ffa7ed1909d9616ab90ef56e2cde",
"assets/images/select_payment_method/netbanking.png": "0879c9be9cfe8db419875ae8c934c200",
"assets/images/icons/add-cash-header.png": "824dc2530102ca6823d1f6b5f2665aed",
"assets/images/icons/header_add.png": "38e5ea4256e6f8d9b829854c03ac112c",
"assets/images/icons/fb-icon-register.png": "44dc5d33e89e609256b0c94bcc76e67c",
"assets/images/icons/plus-sign.png": "198e6652d32072163f6a272981e59402",
"assets/images/icons/calendar-icon.png": "89871aa1271b009a42ff7a5933c9a8bd",
"assets/images/icons/lock-icon.png": "4741992bcbb637566b4737c17a61905c",
"assets/images/icons/influencer-icon.png": "8d2f6a248158e0941054525d98d7676b",
"assets/images/icons/google-icon-register.png": "4217271cce90d993d3e4e7262fb831ac",
"assets/images/icons/apple-login.png": "150d76393fc1c6f0a6fe57f8d268a35e",
"assets/images/icons/avatar-placeholder.png": "4c4acc2410000df111710b97cc55b8ba",
"assets/images/icons/add-cash-header-green.png": "30e029fee11d41d6d95c0ef517083204",
"assets/images/icons/true_caller.png": "d8fc4d45e87547368851b180e995f7dd",
"assets/images/icons/clock.png": "1ac693e88831d1ba843a4790d0235a4d",
"assets/images/icons/arrow_down.png": "a3e6a04bdbea110a7ac21a49efe2b262",
"assets/images/howzat/fgfstar.webp": "f2f2a6c9b63ee0c27b7ba31c64d98f0f",
"assets/images/howzat/new_tr_red.png": "3d8342c7f1f923662d36e38c32e51bf9",
"assets/images/howzat/reward-divider.png": "f6c5ee443ad4a17a013fb2012eae6c8b",
"assets/images/howzat/splash-lottie.json": "8446f9128cce15154f1ed51a5c015ca7",
"assets/images/howzat/tickets/ticket-logo.png": "1dc0138a2eb6727a401cdc4658466ff2",
"assets/images/howzat/tickets/ticket.png": "0412b224068aa124a398e7c6566db093",
"assets/images/howzat/tickets/rupee.png": "66f318c9876b9c9eee25a1899e077d9c",
"assets/images/howzat/tickets/expire_time.png": "cea9f006a105464a44e74a0bf979b035",
"assets/images/howzat/tickets/ticket_subtract.png": "810cefc89f5fc16adf4ef7e254b47108",
"assets/images/howzat/tickets/pass.png": "a332d5646be7f8e96ae48772bdaae514",
"assets/images/howzat/tickets/subtract.png": "6dd6aaf792dc6c6429a3dcf8039368bd",
"assets/images/howzat/tickets/ticket_pass.png": "ba753a219e2d455ed5109c08f1173059",
"assets/images/howzat/prize-trophy.png": "b7ef790e620dc4c94e7363dc28049ea8",
"assets/images/howzat/fgf.webp": "dbc0b60e3daab6bb42a1aa3c999f7489",
"assets/images/howzat/blue_star.png": "124e9d669960e7f46eaf4520af623d4f",
"assets/images/howzat/invoice-download.png": "82e14517159b4a6a7e8026da61c7609e",
"assets/images/howzat/star-filled.png": "dabae93af8f9a383c7628fab47351641",
"assets/images/howzat/bottom_panel/fantasy.png": "4eb80f2a86b8de00a74e4e94b30ef24a",
"assets/images/howzat/bottom_panel/ludo-refer.png": "31bc55099f87df4e57d2b0c31468d9cf",
"assets/images/howzat/bottom_panel/ludo-lobby-select.png": "b110adce00ed83a9394bd37646fc9c05",
"assets/images/howzat/bottom_panel/ludo-refer-select.png": "904492f0746aabf560aece240ae5fdb7",
"assets/images/howzat/bottom_panel/add-cash.png": "f1d49e3650476a1d7fcf4af787c7ab57",
"assets/images/howzat/bottom_panel/real-rewards.png": "f1d49e3650476a1d7fcf4af787c7ab57",
"assets/images/howzat/bottom_panel/home-select.png": "36bcd0a37351a5c7bf7a81077bb3857a",
"assets/images/howzat/bottom_panel/new_tag.png": "730edd404c86df2f3277dea96cd6e021",
"assets/images/howzat/bottom_panel/ludo-my-games-select.png": "1c3cb78a173b186098e8a372fe1e2d28",
"assets/images/howzat/bottom_panel/my-matches.png": "7b534b4f73be8998fb4e6eb8a56f2e61",
"assets/images/howzat/bottom_panel/add-cash-select.png": "d996d149d02d4e2ec907960ebd1624ec",
"assets/images/howzat/bottom_panel/earncash.png": "70a1f36de09d6fd9ea269fceaff57b9e",
"assets/images/howzat/bottom_panel/home.png": "550b878e29a3650b4e1ae20261e3e313",
"assets/images/howzat/bottom_panel/missions.png": "377b71120e0c15e00126f461fa4da480",
"assets/images/howzat/bottom_panel/fantasy_selected.png": "c2e9349736bfce0323986024d7f4fed9",
"assets/images/howzat/bottom_panel/missions-select.png": "4f43c5337562c31bb4bfa866a09bbccb",
"assets/images/howzat/bottom_panel/my-matches-select.png": "cdb1c52f86bdf627787bd08ccfcd29b5",
"assets/images/howzat/bottom_panel/refer-earn.png": "bccfaab3b0f4a333d8af526142bd6d9b",
"assets/images/howzat/bottom_panel/my_matches_selected.png": "baa2401e45e33a7f7f7b077cde363032",
"assets/images/howzat/bottom_panel/ludo-lobby.png": "4a3fbbfad4b24d656c25ee4c1b12c748",
"assets/images/howzat/bottom_panel/my_matches.png": "71da7558770086aa47b28cc7f0656fb2",
"assets/images/howzat/bottom_panel/ludo-menu-select.png": "44e5d4a0fa9fbd19e79fcd62d3061a3f",
"assets/images/howzat/bottom_panel/ludo-my-games.png": "30a917d724d0006716f86cb80f6a902e",
"assets/images/howzat/bottom_panel/hot.png": "eea14a23b0c772e18deaa0642c482787",
"assets/images/howzat/bottom_panel/more.png": "eb529acd268589854d104609d666d00d",
"assets/images/howzat/bottom_panel/ludo-menu.png": "eb802d874ff245c4de3aadc4dec8091c",
"assets/images/howzat/bottom_panel/real-rewards-select.png": "6bf7d248637ad5435863dd61f55d5377",
"assets/images/howzat/fgfarrow.webp": "d999912e69a6db0f3fa35dc0f7999d6c",
"assets/images/howzat/beat-fantasy-icon.webp": "120a31705a1ce4d34a3893114653d20c",
"assets/images/howzat/Strip-Register-screen-howzat-new.png": "4a98dd04a53d58bfbfd61b7cac1ebc2e",
"assets/images/howzat/pin_live_score.png": "1ce466c47456d67570afdfd848175cc7",
"assets/images/howzat/User-Icon-Register-screen-howzat-new.png": "239c33dde388e9a4a2e4d670b40bca56",
"assets/images/howzat/kabaddi_2.png": "98c7b7140a88ae6cbeec9cdc44cfbebe",
"assets/images/howzat/app_access_block.png": "1c417f9bc745ab6953e9deaddf756bd7",
"assets/images/howzat/kyc/image-icon.png": "e6aba3aaea28b545b1592a30902e9e61",
"assets/images/howzat/kyc/mail-icon.png": "21ec32994fb35d35c9dff9bd8f409f61",
"assets/images/howzat/kyc/attachment-icon.png": "2e2c6a070d79fd994152f2c680d64a34",
"assets/images/howzat/kyc/phone-icon.png": "3221d3c42d2b9fab9a6072665756fdc3",
"assets/images/howzat/kyc/pan-icon.png": "5c2e8dfa0c2fbdc0877e03b364bb8cf9",
"assets/images/howzat/kyc/minus-icon.png": "9018553b82a84d88762b7966a702b54a",
"assets/images/howzat/kyc/aadhaar-icon.png": "3ebdba899c0397c5e37fdb5a7d97b0d3",
"assets/images/howzat/tax-error.webp": "83d916bc527f21aa38605deced676ff4",
"assets/images/howzat/no_invoices.png": "d663bc5351caa00187ed03f95f7a3e7d",
"assets/images/howzat/lineup_out.png": "f9f7c5faac500cdea105131159a1a6d4",
"assets/images/howzat/kabaddi_1.png": "8f3a992a3affb61430b5e799d5a5b346",
"assets/images/howzat/sabse_zyada_winners.png": "68e9ad04817add2749fac19fb6fe1db9",
"assets/images/howzat/star-success.png": "eab1ddb68e146b554baa7a91bf4b7897",
"assets/images/howzat/offer_applied.png": "bdfc73f66eede12744e5b45b52c7f04b",
"assets/images/howzat/first-prize.png": "7aa4911c78a04039ea0eec23801e3f11",
"assets/images/howzat/follow.png": "ad6d3601bf393529ffbe86b064414806",
"assets/images/howzat/star-outlined.png": "801c19764c11ef28bb4143f2f21d6d74",
"assets/images/howzat/swap-icon.webp": "f01a38887532bb1e3fcbaeeb44d1288a",
"assets/images/howzat/user-phonebook.png": "5e1e4c850c98fd5a0b2e39c36dd3d45e",
"assets/images/howzat/splash-lottie2.json": "1fde0d718d7a3c2d57b8466815aae6c0",
"assets/images/howzat/batting_icon.png": "31d6f3d2668df5898848782a4f34690d",
"assets/images/howzat/review.png": "0568400cfbb51fb8fee03ffabaad1b2a",
"assets/images/howzat/match_lock.png": "e7cb86845e44242ebfd102cbbc778c8b",
"assets/images/howzat/vertical-logo-register-howzat.png": "ca9052b87f294f45a388e5cee2888a62",
"assets/images/howzat/howzat-logo-text.png": "559a077f800084c88c593bf3378d9fb9",
"assets/images/howzat/fgf_cash.webp": "d4c47f78172b1c0ffeb4c096a54e83b7",
"assets/images/howzat/howzat-logo.png": "4ac0650c7070cbe9c84196c71190065f",
"assets/images/howzat/cross-icon.png": "db0eed5a99758e0102b3389756df13b3",
"assets/images/howzat/arrow-back-grey.png": "c11ea2e17391b3ab41e952ab0e8268df",
"assets/images/howzat/raf/raf_icon_rewards.png": "8fc8306ddae569ea379e96462fed6b32",
"assets/images/howzat/raf/raf_lock.png": "d6ea79bfb63e87978cc322a547c6d13e",
"assets/images/howzat/raf/raf_unlock.png": "163d4c220978a11475827c8d7ca73bfa",
"assets/images/howzat/raf/remind_disabled.png": "128aa2e14f24046b175fcbee88d6ef38",
"assets/images/howzat/raf/raf_unlocked_disabled.png": "d4bb6745b62b639ac00527e9ce88ea25",
"assets/images/howzat/raf/influencer-icon.png": "8d2f6a248158e0941054525d98d7676b",
"assets/images/howzat/raf/remind.png": "54f721e1da27c2f4631c7b0049d4cf1e",
"assets/images/howzat/raf/no_referral.png": "40a46459fdc013279020c8f8be4c3a23",
"assets/images/howzat/raf/refer.png": "f65394155aca849074ad456e41bc64d5",
"assets/images/howzat/raf/raf_lock_enabled.png": "c2c7729897d74b7531965dd697840c31",
"assets/images/howzat/raf/check_circle_enabled.png": "471181fd4eab953408fc3bdb66d37bda",
"assets/images/howzat/raf/check_circle.png": "aee3046a2d92320bc6f7b85ff87dbe10",
"assets/images/howzat/live-matches.json": "bcda00b67fcb273823fc6d7ac07d1f49",
"assets/images/howzat/new_tr_white.png": "214a29e3f642d89953c59ef42649271a",
"assets/images/howzat/carbon_location_filled.png": "36c8499bc52367c137072969f74b37c6",
"assets/images/howzat/arrow-back-green.png": "a825bda6791fdebaf70c500bc4304fab",
"assets/images/howzat/nudge-timer.png": "d82837149c7c15f2a5aa49ca788db9b0",
"assets/images/howzat/graph-icon.webp": "508f6388fce24167caad2b9d81713982",
"assets/images/howzat/tax.png": "1f01faf7096cef31777479609d48f0b2",
"assets/images/howzat/logo.png": "894ded89303c06f582627cbe81ad5505",
"assets/images/howzat/appdrawer/ticket-logo.png": "1dc0138a2eb6727a401cdc4658466ff2",
"assets/images/howzat/appdrawer/update.png": "9d57915bf33bfe8658ece2502ef73e07",
"assets/images/howzat/appdrawer/email-us.png": "ec26a3fec06ac96ba22ec8084a42b1c8",
"assets/images/howzat/appdrawer/contact_us_poker_star.png": "5fc2eb13728d5181a5fbfe948c8b3e58",
"assets/images/howzat/appdrawer/terms-and-condition.png": "374baa1f351e298443559ac23359aa5f",
"assets/images/howzat/appdrawer/payment_settings.png": "db35b5ddf6899301c2fffc41c367f40f",
"assets/images/howzat/appdrawer/junglee.png": "2c81bfd3e55b4ebffd26ce7564ba309b",
"assets/images/howzat/appdrawer/contact_us_poker.png": "cc1578332adfb41606254571d9073abc",
"assets/images/howzat/appdrawer/how-to-play.png": "0403edc7a4798338de7092ac73ed2506",
"assets/images/howzat/appdrawer/vector.png": "a812b54f56546fd9f57a27d05ed59cb1",
"assets/images/howzat/appdrawer/logout.png": "1e9a9a648585b575bfd029b43e1bc236",
"assets/images/howzat/appdrawer/scoring.png": "3270af8d7f406f3b143e4eae51a54f31",
"assets/images/howzat/appdrawer/email-us-poker-star.png": "4c5210b867a2dde91dcd1e27b84fe2e5",
"assets/images/howzat/appdrawer/promotion-tag.png": "5e2fee089e98bbb463f8657def85125e",
"assets/images/howzat/appdrawer/hamburger.png": "d747b4128663c7f12d2ae396d55ee923",
"assets/images/howzat/appdrawer/missions.png": "846d98a4f883d40d77e92fbe414d55b7",
"assets/images/howzat/appdrawer/join-contest.png": "61cd02abd55f08393827956f049458d5",
"assets/images/howzat/appdrawer/kyc.png": "f2ffb682a787478e05be386a993c2f8f",
"assets/images/howzat/appdrawer/person-icon.png": "b6184a5aeb67f61a4bf1cc3aa34c787f",
"assets/images/howzat/appdrawer/contact.png": "75b3b6a525d0d8d01189cdf99e99fd8f",
"assets/images/howzat/appdrawer/privacy.png": "cc0ef49662326d41b866ee76a10924f3",
"assets/images/howzat/appdrawer/account-summary.png": "2ef108420d78e83a7d056cafaec9b262",
"assets/images/howzat/appdrawer/blog.png": "c910bdf48672d6763e9e8f78eae3a18e",
"assets/images/howzat/appdrawer/new.png": "cdaeb4432e24e33701a5e4b8823be2d4",
"assets/images/howzat/appdrawer/challenge.png": "e345775704b6192601757dc3d0dfcabf",
"assets/images/howzat/appdrawer/contact_us.png": "a2329543f7927a107f363af8580c9c7f",
"assets/images/howzat/appdrawer/whatsapp.png": "06be5e21d2559792c3a84e34eea524fb",
"assets/images/howzat/appdrawer/cashback-icon.png": "dfad96e72fd2d35aa0086496aa5aa8de",
"assets/images/howzat/appdrawer/withdraw-icon.png": "41c14f7e2688408f11a25cfabf4e50bf",
"assets/images/howzat/idea-icon.webp": "f98f9e4aa13cbd135069b721af0b6fb6",
"assets/images/howzat/promo-icon.png": "1712a0f5903705b066b3cbd5ed029dc9",
"assets/images/howzat/tick-mark.png": "44521866fc16c3edb3b5c5ff06b186ed",
"assets/images/howzat/share.png": "8a65a9052c3fb2524bef9c21c9a8d33e",
"assets/images/howzat/lobby-vs.png": "3403f40bc27573d51df3c3146c652050",
"assets/images/howzat/arrow-back.png": "a2ba3db844af8a1671e613e538e90d66",
"assets/images/howzat/bg-register-screen-howzat-new2.jpg": "5f818564a30489c9456a14b063fceac0",
"assets/images/howzat/invoice_download.png": "1662b9f369d2fd03c30f2353f0754476",
"assets/images/howzat/manage_account/manage_accounts.png": "bb414a6d33cb913b0690b9132b303ec3",
"assets/images/howzat/withdraw/info.png": "4ddb590d37e64795977e432f4e57eec3",
"assets/images/howzat/withdraw/check.png": "7918c3c40eba0540e015b191db3273d5",
"assets/images/howzat/withdraw/woo.png": "336e76fa5e595a273be897d562dd8eb0",
"assets/images/howzat/withdraw/user_blocked.png": "994a27dd44d9edaa3e98a405c5b1d9a3",
"assets/images/howzat/withdraw/red_arrow.png": "9545e023ccd753bf8fa630963a2fba8a",
"assets/images/howzat/withdraw/flash.png": "07b97654fe58ee12848ee7f78f939b2e",
"assets/images/howzat/withdraw/confetti.png": "966204db926e6ae265a924bcdd58caae",
"assets/images/howzat/withdraw/question_mark.png": "31b782f99f9051dd32a8703abd2e3d1d",
"assets/images/howzat/withdraw/reverse_grey.png": "de0bfe312b8a550e63bfebe25ede8524",
"assets/images/howzat/withdraw/poker.png": "6a06acf108a749b83b6a55609d401d46",
"assets/images/howzat/withdraw/howzat.png": "5f53cb46511bbda5f86ec6c2ac7bb152",
"assets/images/howzat/withdraw/withdraw_requested.png": "194d9d29d8cc0f374b6f79a54868715d",
"assets/images/howzat/withdraw/verified.png": "33d6f8b6149cc552bf4806c09b91bbdd",
"assets/images/howzat/withdraw/confirm_withdrawal.png": "c6323cebbc393fad0a92938d7f6b6cdb",
"assets/images/howzat/withdraw/blue_flash.png": "4d78266a621ecd8d4f2fed168351c381",
"assets/images/howzat/withdraw/arrow.png": "3db0bddd022474dc724cf4c060987607",
"assets/images/howzat/withdraw/upi.png": "a22d80e1c7b9340adaee6951989fe33f",
"assets/images/howzat/withdraw/pokerstar.png": "b144d05035f43a54e42e148267ccbb36",
"assets/images/howzat/withdraw/bank_withdraw_circle.png": "111a9c2f44a7f085ba71e2f09017465e",
"assets/images/howzat/withdraw/timer.png": "76946e91807950a33976648308ecdbc7",
"assets/images/howzat/withdraw/emoji_cash.png": "2d7e107a70313a9cd6780984dcb7bad0",
"assets/images/howzat/withdraw/bank_withdraw.png": "acc11795fc0994eb7739a177d973b295",
"assets/images/howzat/withdraw/tax.png": "5268724f5c4ba7cea2c8cee0e1b5ae2c",
"assets/images/howzat/withdraw/cross.png": "9a8ea1940b6b21eb646f3f648e8f37b3",
"assets/images/howzat/withdraw/paytm%2520copy.png": "40ac275efd5f286f811f42dd52646f6d",
"assets/images/howzat/withdraw/refer.png": "8a7187e84d4906124e0939172caed8f5",
"assets/images/howzat/withdraw/reverse.png": "755c088ce2f74b569516608d18ff07f2",
"assets/images/howzat/withdraw/blue_bulb.png": "f904563d93b83158a44deae02d8416ce",
"assets/images/howzat/withdraw/clock.png": "084b8877828d0b9ae4d86fbe10f1af8e",
"assets/images/howzat/withdraw/bank.png": "e4b3344b1bd782dbe6fcf0e17bd50493",
"assets/images/howzat/withdraw/history_icon.png": "bd5ee2023ae019cfc50ce22917b3368e",
"assets/images/howzat/withdraw/paytm.png": "9b1f0b1c3216cb2f858706c6437c9fb8",
"assets/images/howzat/withdraw/recommended.png": "eed7ef24cbda30fbb04b6f6a89381d8b",
"assets/images/howzat/withdraw/up_arrow.png": "39fe169557f63c05cdba8d006a370afd",
"assets/images/howzat/withdraw/pennydrop_inprogress.png": "518f4c4f04a8a209e3c681fabfb4d02b",
"assets/images/howzat/withdraw/add_new.png": "3f6bdec7ebaeadcc9890b9e5e91afe26",
"assets/images/howzat/withdraw/howzat_circle.png": "7e15bfe3af55f2c69380eacd866d3c8b",
"assets/images/howzat/CrossBTNOptPopup.png": "a5587960943d0ad28ebad4a1ab444697",
"assets/images/howzat/line.webp": "97fc35e212ced643f2d4190eb5c98d52",
"assets/images/howzat/fgf_background.webp": "c218a0f739226b7c5250e13a51b3c632",
"assets/images/howzat/tax2.webp": "18e2a6b42baee89ba48af508734e343f",
"assets/images/howzat/crown.png": "dcd396d92a1770fac95a87b37d0f7446",
"assets/images/howzat/logo-name-white.png": "203a0034622e43d0a9644d209bcb969f",
"assets/images/howzat/Contest_Icon_white.png": "f8b52238178c248738c12b77eaba2145",
"assets/images/howzat/copy.png": "739b59a78fbb978de67cd9d75f8f84ff",
"assets/images/howzat/logo-register-screen-howzat-new2.png": "3210409f5229e723d32be2c023941204",
"assets/images/howzat/logo-white.svg": "96f9880d280712d6607bb988b90a266b",
"assets/images/redChip.png": "84b18d449cbf63f10acee2b61fdade3f",
"assets/images/withdraw/notes.png": "9cda6f909647b4b2403d715f7e5532ee",
"assets/images/withdraw/grey_timer.png": "8d4bc84c746c4ea113a82cad3be081c5",
"assets/images/currency/diamond.png": "b157fff31244b144e3c9aab25e57b00f",
"assets/images/currency/cash.png": "449fe36367ae35ba7ffc5a94b38b6117",
"assets/images/transaction_summary/jr_transaction.png": "2a7478d58fd57493f685ca07d87f44e1",
"assets/images/transaction_summary/add_cash.png": "24b78fa80556acf0958319687bfd44a1",
"assets/images/transaction_summary/bonus_released.png": "8476d199296728eacd3b541fbe2b2ab1",
"assets/images/transaction_summary/reward.png": "e50d52c20579ca8d1eb3d9fe998836bb",
"assets/images/mic.png": "7972c8ae8f7c9d01515641665ea38c8c",
"assets/AssetManifest.json": "6ceea7060b4a1936a4d09d3d4535a91c",
"assets/rive/notification-indicator.riv": "1ddce9f41d2a9dc5da7913276085967d",
"assets/rive/success_check.flr": "18856e71f0799e58a17f9fa83ee0a792",
"assets/rive/ripple.flr": "034901d311d8a4b8fe528172676bd9ab",
"assets/NOTICES": "09188d9387c438fec8ce29a33f7ac924",
"assets/FontManifest.json": "987d0c8587d76c59c4e14a3e4e0dac63",
"assets/AssetManifest.bin.json": "45c9c420d9aa548960495dbef832660e",
"assets/packages/flame_poc/assets/images/poker_game_bg.png": "7138b954f0c3f843c4405d54e5bac44f",
"assets/packages/flame_poc/assets/images/poker_game_table.png": "5ae9817ef841ea61c4220700e76efae4",
"assets/packages/flame_poc/assets/images/seat_with_player.png": "21fa5e35532325c0a9ab208dd9823446",
"assets/packages/flame_poc/assets/animations/birthday.json": "8b93b04c86c0dbddd7a564991adb9918",
"assets/packages/flame_poc/assets/animations/face.json": "71868d88ad87dd8593ec0a3b61657dcf",
"assets/packages/flame_poc/assets/animations/slipper.json": "55980f741845181a10ba8af0c65ea467",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/kyc/assets/images/eye-off.webp": "89d13bcd7bceeb9f2002b6812b2016c8",
"assets/packages/kyc/assets/images/retry.png": "633355f34862b8807ea81b8819914fdf",
"assets/packages/kyc/assets/images/passport2.png": "26b01577c3deb6ff7402aec1a03fee29",
"assets/packages/kyc/assets/images/eye.webp": "321e0d370b57d4a38272a45284375630",
"assets/packages/kyc/assets/images/kyc_banner_verified.png": "d228eba06026dfc35154d9620b583a13",
"assets/packages/kyc/assets/images/note.png": "1c12d800380e2a2f2b92be4c7a4bd006",
"assets/packages/kyc/assets/images/pokerstar_aadhar.png": "fd9b256680e861270850801b0063c358",
"assets/packages/kyc/assets/images/pokerstar_aadhar_placeholder.png": "909d1f4085493ca508df19bedca7f3ee",
"assets/packages/kyc/assets/images/passport3.png": "2f8c78813cecc68ee259fc03d68a7a1d",
"assets/packages/kyc/assets/images/passport1.png": "ec3769df25f6a440a56c23e22dc5f55b",
"assets/packages/kyc/assets/images/pokerstar_pan.png": "e31d5a686486a2b275b4b703bdc74512",
"assets/packages/kyc/assets/images/kyc_banner.png": "090b80aa7157a1f363b3395ec4237a58",
"assets/packages/kyc/assets/images/aadhar_placeholder.png": "90d6c6a4db3b88e63ca71cf4c044b82d",
"assets/packages/kyc/assets/images/faster.png": "fa810ec169435424f4dabe4199d08602",
"assets/packages/kyc/assets/images/vector.png": "68331e559b0734db8d455d35fa5ee91d",
"assets/packages/kyc/assets/images/aadhar_placeholder_new.webp": "fe39ef4bcdddd32538015b767d11f0a0",
"assets/packages/kyc/assets/images/secure.png": "d8f53e2274cafed6ac5b9189e89b4d7f",
"assets/packages/kyc/assets/images/dl_rules.png": "8fc9029dca1f503cc23f1e53f99888ab",
"assets/packages/kyc/assets/images/kyc_order.svg": "9b8558804b03fadcf2b5690ec986dc0f",
"assets/packages/kyc/assets/images/passport_front.png": "ca110015ea7779fcea84e56588915849",
"assets/packages/kyc/assets/images/upload_icon.png": "7211c94dca9e4523121382cf53297596",
"assets/packages/kyc/assets/images/exit_warning.webp": "9020d39cfd366dd35ef6f1f976ad82a3",
"assets/packages/kyc/assets/images/voter_back.png": "6f90f83e2d8f7f1e98e9f1a1fa941c11",
"assets/packages/kyc/assets/images/dl_back.png": "f1ba53c0de647d7b5bfad3512796a49f",
"assets/packages/kyc/assets/images/aadhar.png": "9a32d49d903049e50cd0d5dde149fa07",
"assets/packages/kyc/assets/images/scanning.png": "08b8102a403fdc688817f576a347238d",
"assets/packages/kyc/assets/images/voter_preview.png": "778cc455a994addb5c7e2cf4dc0b52bb",
"assets/packages/kyc/assets/images/pokerstar_kyc_banner_verified.png": "3e0774657b4779e4579902486a7955ac",
"assets/packages/kyc/assets/images/jg11/dash_line.png": "21655b099f2c0d023588e0d1ff6a64db",
"assets/packages/kyc/assets/images/jg11/logo_white.png": "8929dcd47941bfe17135d7d6b4778d90",
"assets/packages/kyc/assets/images/aadhar3.png": "d98d9437a9f634475a650d255c1de525",
"assets/packages/kyc/assets/images/pan.png": "7c1c4989428e21f247d6c855bea3f1c7",
"assets/packages/kyc/assets/images/aadhar2.png": "8d9769c8a091cff2fbd4b940286acb4b",
"assets/packages/kyc/assets/images/verification_blocked.png": "a7268f7551a1f855139dfe2526aee16d",
"assets/packages/kyc/assets/images/verification_success.png": "71c9069fa64f404f0721d2211dc7eb48",
"assets/packages/kyc/assets/images/mobile.png": "1e80ccb265fe1a5fef57b9b9fdee236a",
"assets/packages/kyc/assets/images/dl_front.png": "bc2a4b27ad4cb37c7f6a8abe5a3349fa",
"assets/packages/kyc/assets/images/aadhar1.png": "b2ff0038c1eddff168ebd269077aac4d",
"assets/packages/kyc/assets/images/aadhar_back.png": "a6b48a4b3d362cc6dae84787e852fd81",
"assets/packages/kyc/assets/images/frame.png": "4db983d4aa311de515c56d1738eb7a9e",
"assets/packages/kyc/assets/images/pokerstars_faster.png": "c2649a36e3210a9bc275f0197e3da5d9",
"assets/packages/kyc/assets/images/digilocker.png": "f2e1f558597c0380d602359087179b54",
"assets/packages/kyc/assets/images/verification_failed.png": "4f38c3e4f2b615d22773d160e250de20",
"assets/packages/kyc/assets/images/cross.svg": "03c053076146691e42ab8ac70c8dd885",
"assets/packages/kyc/assets/images/pokerstar_kyc_banner.png": "326b8b17edddbc1c67daf221eae87489",
"assets/packages/kyc/assets/images/dl2.png": "c2e98fab7830746258ecddd0d7db9f81",
"assets/packages/kyc/assets/images/voter_front.png": "07876673ae1bca9b5a69a90180c596a8",
"assets/packages/kyc/assets/images/voter2.png": "f946e329b6deb7f7e1128304c8b3046e",
"assets/packages/kyc/assets/images/done.svg": "3bda7180921179b2ebdd8d5cbc174f98",
"assets/packages/kyc/assets/images/pokerstar/pokerstar_aadhar.png": "fd9b256680e861270850801b0063c358",
"assets/packages/kyc/assets/images/pokerstar/pokerstar_aadhar_placeholder.png": "909d1f4085493ca508df19bedca7f3ee",
"assets/packages/kyc/assets/images/pokerstar/pokerstar_pan.png": "e31d5a686486a2b275b4b703bdc74512",
"assets/packages/kyc/assets/images/pokerstar/pokerstar_kyc_banner_verified.png": "3e0774657b4779e4579902486a7955ac",
"assets/packages/kyc/assets/images/pokerstar/verification_success.png": "6d710f988e7c5aa1744c20b87cc8bfd4",
"assets/packages/kyc/assets/images/pokerstar/pokerstars_faster.png": "c2649a36e3210a9bc275f0197e3da5d9",
"assets/packages/kyc/assets/images/pokerstar/pokerstar_kyc_banner.png": "326b8b17edddbc1c67daf221eae87489",
"assets/packages/kyc/assets/images/pokerstar/pokerstar_mobile.png": "52804b81ad16e3c5ffdf13a214eafb20",
"assets/packages/kyc/assets/images/pan_placeholder.png": "78fda0df30b9894649e4d56771073e89",
"assets/packages/kyc/assets/images/voter3.png": "35e892b2a9f6f5b2fc0e24f675c5cab4",
"assets/packages/kyc/assets/images/passport_back.png": "2d4bb0932a2c56897ced8c4c2f0f36d9",
"assets/packages/kyc/assets/images/verification_pending.png": "a573b6e4eb6c379e4326c3986538ea89",
"assets/packages/kyc/assets/images/dl3.png": "56a1b99f53f33e2877b1013921824047",
"assets/packages/kyc/assets/images/dl1.png": "68e42b1aa87d28c2243b5b626da693f3",
"assets/packages/kyc/assets/images/voter1.png": "9ac0edb184181d77fdd0876fb0aceffa",
"assets/packages/kyc/assets/images/aadhar_front.png": "d421ab4e8ab186221caa4fafc5e119f0",
"assets/packages/kyc/assets/images/verified.webp": "1e1caf86454cc4131f101231ff03c3af",
"assets/packages/kyc/assets/images/pokerstar_mobile.png": "52804b81ad16e3c5ffdf13a214eafb20",
"assets/packages/kyc/assets/images/diglocker_consent_form.webp": "78d77021f203282edabb5add066e1c8e",
"assets/packages/kyc/assets/lottie/aadhaar.json": "c7051ed9fc5411e21db01fe6c0b54bc1",
"assets/packages/kyc/assets/lottie/passport.json": "e9389e24556d181f6a479bf02d3fe76c",
"assets/packages/kyc/assets/lottie/confetti.json": "7ad235b7131dbdca2ec6ae3d15b3aa32",
"assets/packages/kyc/assets/lottie/pan.json": "834778739677cb005dccdbf178f2f831",
"assets/packages/kyc/assets/lottie/pokerstar/aadhaar.json": "3ac3af5e5f345255d39f0b9c27fe377b",
"assets/packages/kyc/assets/lottie/pokerstar/passport.json": "86cbd5f84cdd8cf38582f42ba4ca493b",
"assets/packages/kyc/assets/lottie/pokerstar/pan.json": "de08e5ed384198d504c3fd1f32ee176a",
"assets/packages/kyc/assets/lottie/pokerstar/dl.json": "1f5a9d299c33c844023f04f818150184",
"assets/packages/kyc/assets/lottie/pokerstar/voter.json": "3be4597c24af37af45f2ae38d190bf63",
"assets/packages/kyc/assets/lottie/dl.json": "6a320323081dd77f70ae13e07a37fd41",
"assets/packages/kyc/assets/lottie/voter.json": "e7b3a06f997dadb1034d92e1637c0cab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/lobby/assets/images/rr-lobby-icon.png": "ba8b3036b7a663aa6baa5fb5a9254fd1",
"assets/packages/app_rating/assets/pokerstars_playstore.png": "549e2415525f0705550c5bc6a4b0c1df",
"assets/packages/app_rating/assets/poker.png": "16fe29e0101e0dea78e74042ed2f0fcd",
"assets/packages/app_rating/assets/poketstarts_appstore.png": "eeb22e2f41db63d3505a722b2d7e6f86",
"assets/packages/app_rating/assets/appstore.png": "30f6760b3a4382276e0b4314e95b151a",
"assets/packages/app_rating/assets/icons/star_white.png": "359a2d60f7a8b17912728ea823832e92",
"assets/packages/app_rating/assets/icons/feedback_icon_1.png": "b5c650ebf009d99f8cbfd88384f880ca",
"assets/packages/app_rating/assets/icons/feedback_icon_0.png": "10331f0d35173b8090b17eabf475c790",
"assets/packages/app_rating/assets/icons/feedback_icon_2.png": "fe2d9250b3fe2ec53833433768f70515",
"assets/packages/app_rating/assets/icons/feedback_icon_3.png": "63aefdf0bc9ec488091e0d76a9d115e1",
"assets/packages/app_rating/assets/icons/rectangle.png": "30aac88297be84d9870733691e72f019",
"assets/packages/app_rating/assets/icons/feedback_icon_4.png": "897b629dff040115b1f50cd0c765d7f7",
"assets/packages/app_rating/assets/icons/feedback_icon_5.png": "da77f0ae5ad1da90d5378e1e812abf07",
"assets/packages/app_rating/assets/icons/star_red.png": "9a0602a1e5affc4b1961acfc6ecc61dc",
"assets/packages/app_rating/assets/pokerstars.png": "d679459f12c3176ddecab129ebe19d4d",
"assets/packages/app_rating/assets/playstore.png": "314d6d85cdfa47bbfbceb291bde8b98c",
"assets/packages/app_rating/assets/box.png": "b091449e68ed4e191558858992070e76",
"assets/packages/rummy_building_blocks/assets/audios/stw_rotating_sound.mp3": "d74c3429e3e95b5e1e63ecb52fe945dd",
"assets/packages/rummy_building_blocks/assets/images/tournament/expired.webp": "5459c3bbf01d6dba1818f995ccb7585f",
"assets/packages/rummy_building_blocks/assets/images/tournament/stopwatch.webp": "c2f1521151d2b8ac7434eda657373c0e",
"assets/packages/rummy_building_blocks/assets/images/tournament/how_to_win_ticket.webp": "2954f5ae11c632e0f076329ee2fc891f",
"assets/packages/rummy_building_blocks/assets/images/tournament/claimed.webp": "e81caf6c6fcc0e9bd3348d57108d9344",
"assets/packages/rummy_building_blocks/assets/images/tournament/trophy.webp": "ef4b56af5f742dc119b6b597f1a66cda",
"assets/packages/rummy_building_blocks/assets/images/tournament/ticket2.webp": "718ac116a8a29501d0dcd2a4c0d0a626",
"assets/packages/rummy_building_blocks/assets/images/tournament/ticket.webp": "e1bf02dccec0d5f3b5b8891f183038f2",
"assets/packages/rummy_building_blocks/assets/images/tournament/tournament_rejoin_icon.png": "419a3fb004774cef5fe290cfa0efdf9b",
"assets/packages/rummy_building_blocks/assets/images/tournament/how_to_use_ticket.webp": "faf8a31133553b4e25d159e92581c68e",
"assets/packages/rummy_building_blocks/assets/images/tournament/how_to_get_ticket.webp": "103c71dc2e5d003e66dbccc2f75a8942",
"assets/packages/rummy_building_blocks/assets/images/gifs/confirmation_popup_2sec.gif": "217c3af8c5371e1f97397c1baa4b2bc0",
"assets/packages/rummy_building_blocks/assets/images/gifs/winner_popup_6sec.gif": "3b424b9f052319c37b54d9d1e0a618f8",
"assets/packages/rummy_building_blocks/assets/images/gifs/arrow_2sec.gif": "5cbc88619db0baf5e6c7861ba402680a",
"assets/packages/rummy_building_blocks/assets/images/backgrounds/img_table_player_inactive.webp": "7e65e1b9e08d87cd9077d45a145ee789",
"assets/packages/rummy_building_blocks/assets/images/backgrounds/img_table_player_active.webp": "21ff6a8cd94acfd764e59ee63eae4b92",
"assets/packages/rummy_building_blocks/assets/images/icons/tournaments_active.png": "04fcaa7e9d461ae3e7753ee59b0666fd",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_disclaimer.png": "f0d16543f040b80dd75b3aa7dd26f4cc",
"assets/packages/rummy_building_blocks/assets/images/icons/new_variant_yellow_label.png": "2703728df3064a7c40064a5763a9e739",
"assets/packages/rummy_building_blocks/assets/images/icons/less_icon.png": "c4ef805b8af9bf9e1c20b563076db649",
"assets/packages/rummy_building_blocks/assets/images/icons/knockout-logo-icon.webp": "02bfc912e4f2641bd9e8a6593e530a06",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_promoted.png": "084f9df48e808381ffea8960cb804d59",
"assets/packages/rummy_building_blocks/assets/images/icons/white_goods_gift_icon.webp": "9b293fdd2fcfe09b4e88d6f4a7ccdfe7",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_tournament_trophy_greyscale.png": "c4c31d4fe7d5fdbe2c24138ab3189590",
"assets/packages/rummy_building_blocks/assets/images/icons/joined_games_table.png": "c78bd0a8d61bf309c71b40c9254bfc82",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_table.png": "309b85233331340b08f48e3b7fdc5608",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_how_to_play.png": "ae8dcef2f12c2432e28dfa046768a394",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_rebuy.png": "5aab01d7d44d6d5321677fb7d69279af",
"assets/packages/rummy_building_blocks/assets/images/icons/cash_inactive.png": "4bf23676ff17289f9fd7034e7fbaf201",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_tournament_ticket_3x.png": "ae6a73d2b75be61390bd628ea1d4a69a",
"assets/packages/rummy_building_blocks/assets/images/icons/calender_reg_bg.webp": "f3c46725b5cba2728b8238349ae03864",
"assets/packages/rummy_building_blocks/assets/images/icons/badge_silver.png": "726342719b0f9e063d91255ae7ef0dac",
"assets/packages/rummy_building_blocks/assets/images/icons/badge_gold.png": "36ba78002f63aa3e5e97e923367f1e89",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_tournament_bell_grey.webp": "fac72ab34f5f5d64e6fd529cd1df62ad",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_winners.png": "af18c322163c7706fa900f2c3282d9ac",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_joiners.png": "f7e55ee877a490d4098ce7a6960461f8",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_chip_1.png": "d9c4a7caf75adc7e6d2dc2e784ca9157",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_red_arrow_back.webp": "20734c2247a76cbd83aea5348a03d625",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_calender_green_bg.webp": "19387ba83efb2b9885228f104af4f339",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_deals_per_round.png": "5f756dc52b4f87bbd9740a331c080314",
"assets/packages/rummy_building_blocks/assets/images/icons/share_icon_bordered_3x.png": "616f5979d8a1c0c53295ea9c587b1936",
"assets/packages/rummy_building_blocks/assets/images/icons/badge_platinum.png": "ef9c0eaea348e71da8009853a2082880",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_leaderboard_prize_1.webp": "852dbe39b76431905f8cd4d5ae1f2e26",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_info.png": "6016b9525b93cdb727b9d05df84577e7",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_rank_1.png": "ec74750fd6fcebab19800291f3157f49",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_tournament_bell_green.webp": "13057c7922a14bbd543fda50238e06fe",
"assets/packages/rummy_building_blocks/assets/images/icons/spin-logo-icon.png": "2e8afb02dbf9b1de1dd584f02ece1ad2",
"assets/packages/rummy_building_blocks/assets/images/icons/joined_games_1.png": "d6f1ce0af466dd9c9c1db6cd4ab12808",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_total_rounds_new.png": "a352afac21fea5f65b25cbcda18b0d21",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_addcash_icon.webp": "ea85269a2990d06bffa1ba8fd7196921",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_lp_3x.png": "f3fd331f681fe1e467a6ef420ba2fc0b",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_rank_3.png": "9739cd5b7ad3ad3301c55ef586df6081",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_rank_2.png": "140d1d364728c6df13ce0f27b67140df",
"assets/packages/rummy_building_blocks/assets/images/icons/player-icon.png": "5a12fbfc473d8d4b0992ecc659684a34",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_winner_new.png": "7a4ec1f47562717c0c994e56fff87d8e",
"assets/packages/rummy_building_blocks/assets/images/icons/cards.webp": "8855bb8ae7d5d1c43712ff8aa562eb32",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_sng_trophy.webp": "0d96e026548cfc6ea6cb55f05220452f",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_tournament_ticket_with_bg.png": "b519344962e94419237b2b2e0363447d",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_tournament_trophy_1.png": "735831188c1ec334da726dab5cd7c7bd",
"assets/packages/rummy_building_blocks/assets/images/icons/practice_inactive.png": "0e6722a4384b03b05deb43fd010d3da5",
"assets/packages/rummy_building_blocks/assets/images/icons/spin-logo-with-shadow-icon.png": "d264214f5604799347a31cfc75176fc4",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_leaderboard_prize_3.webp": "5333bd35866778f22f5f03d9df06d9fa",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_opt_out.webp": "e3f2e21a697d0550095fc4ef5e043cd4",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_rupee_icon.webp": "648c7d507b7ffa17f0b6408755db796e",
"assets/packages/rummy_building_blocks/assets/images/icons/cash_active.png": "0ab6120b28f609dfe1a4ed9470911a59",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_tournament_trophy_2.png": "71ff8a0d96a0071ce3842c54341f415e",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_players_new.png": "ad4d98b1265bfce9d38fd9aec10bc1b8",
"assets/packages/rummy_building_blocks/assets/images/icons/cardui_61_101_201_icon.png": "7783cff0b12548afb6550abbefff1a33",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_rummy_rumble.png": "ad4b748ebccbbb2ee918141e340962b5",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_leaderboard_prize_2.webp": "fa432c20eafd269776b66602bd5b4b2d",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_estimated_duration.png": "31e664df26a8a76ae518ef455512e7a2",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_tournament_trophy_2_with_bg.png": "8c809f6b29928279241c58fc5e8613b2",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_growth_yellow.png": "2f508ddf5efeb95670c0f7199c370e23",
"assets/packages/rummy_building_blocks/assets/images/icons/coins_stack_ic.webp": "4210ed8d42b28d17fad8904a64f1c2c5",
"assets/packages/rummy_building_blocks/assets/images/icons/practice_active.png": "78b14443c97a0e3114715ca94a6394e5",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_trophy_icon.webp": "146fc2bddc721e227d9e40edac5c327f",
"assets/packages/rummy_building_blocks/assets/images/icons/badge_na.png": "96941844909f062473a9930b3e762636",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_coins_gc.png": "06adf15eeac7d9555e00a291abce19ec",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_spade_back.webp": "9c736e67e70fa10b1d39efb0d5e562b0",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_trophy_yellow.webp": "72c9e1fd6cf562b008d30771e6f0140d",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_winner_medal.webp": "ee55861260bd59e09a80db11076791a5",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_group_person.webp": "0df2170c0220d99abfbc3dc2f53d8325",
"assets/packages/rummy_building_blocks/assets/images/icons/new_variant_red_label.png": "c3a0879e31e4d2ea65fd276d38e826f6",
"assets/packages/rummy_building_blocks/assets/images/icons/badge_diamond.png": "9cd99d1cd5ce399b204cf2dd957e085a",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_tournament_calender_2.png": "f5c02b75fa61eeaafe7e254a9ee20e34",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_lp.png": "c90a5f78a4a5f1329a876d0f3dad963a",
"assets/packages/rummy_building_blocks/assets/images/icons/details_arrow.png": "61fa0a1b0f8b9a88d4f016fa690f3a51",
"assets/packages/rummy_building_blocks/assets/images/icons/placeholder_avatar.png": "89ffd7687cd6c6013e9e917d924d9518",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_extra_prize_pool.png": "dc25e38593daa8f0b2aad834b5f441ec",
"assets/packages/rummy_building_blocks/assets/images/icons/greater_icon.png": "a8bfeecd337d63dbff80ed6d192ef126",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_type_rapid.png": "3faae05899e6b04a7bcaa25588cb3b38",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_tournament_new.png": "63fec93d62dfbcd8f3584d4571db3361",
"assets/packages/rummy_building_blocks/assets/images/icons/lobby_ticket.png": "6b44cbf8c3fa1aaea0ed9b785261905f",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_chips_stack.png": "8cd110dce9ca5e54eba3f20d00582c1a",
"assets/packages/rummy_building_blocks/assets/images/icons/badge_bronze.png": "b64c28fdb26360b17c6b61111f28668e",
"assets/packages/rummy_building_blocks/assets/images/icons/tournaments_inactive.png": "d9736d6966ade4e044eea2e23a77fcb4",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_info_icon.webp": "c2736839ac12b24315cf64b956ceab41",
"assets/packages/rummy_building_blocks/assets/images/icons/ic_tournament_structure.png": "a81b6733e1c2e641cb55fe0b640bb618",
"assets/packages/rummy_building_blocks/assets/fonts/montserrat/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/packages/rummy_building_blocks/assets/fonts/montserrat/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/packages/rummy_building_blocks/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/packages/rummy_building_blocks/assets/fonts/montserrat/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/packages/rummy_building_blocks/assets/fonts/roboto/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/packages/rummy_building_blocks/assets/fonts/roboto/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/packages/rummy_building_blocks/assets/fonts/roboto/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/packages/rummy_building_blocks/assets/fonts/roboto/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/packages/rummy_building_blocks/assets/fonts/roboto-condensed/RobotoCondensed-Bold.ttf": "cbd4e701269338259ee0b39a0b768167",
"assets/packages/rummy_building_blocks/assets/fonts/roboto-condensed/RobotoCondensed-Regular.ttf": "52ee8b598488b1ffbaa93e50cbd6a2f4",
"assets/packages/rummy_building_blocks/assets/fonts/roboto-slab/Roboto-Regular.ttf": "df7b648ce5356ea1ebce435b3459fd60",
"assets/packages/rummy_building_blocks/assets/fonts/roboto-slab/RobotoSlab-Bold.ttf": "23019639a8595304d806c076165eb843",
"assets/packages/rummy_building_blocks/assets/fonts/roboto-slab/RobotoSlab-Light.ttf": "838d30a090ecd1ea46fe78ba86a95755",
"assets/packages/manage_account/assets/images/broken_heart.png": "12be7d228ffb9969f59810392e3fc7de",
"assets/packages/manage_account/assets/images/info_orange.png": "0788430e4957e6998f9cd76382f743a1",
"assets/packages/manage_account/assets/images/mobile_number_phone.webp": "d054bfd996d59b2b9ae029a64aac30a4",
"assets/packages/manage_account/assets/images/bin_close.png": "6c39ea539c36e0d4c6dba2b89121e1b7",
"assets/packages/manage_account/assets/images/wallet.png": "0083e9ec0d34744b5975a070efe93f44",
"assets/packages/manage_account/assets/images/red_info.webp": "e6b45ecfad5037cce70a1e5ab06e2cf0",
"assets/packages/manage_account/assets/images/delete_bin.png": "d2359d628e1f530bc6f78fb784b0b04b",
"assets/packages/manage_account/assets/images/process_undone.webp": "a2380d8f7e53656088865b9432fa6f94",
"assets/packages/manage_account/assets/images/otp_lock.png": "fdef83594180c819c4549ce70794e643",
"assets/packages/manage_account/assets/images/feedback_text.webp": "926eac324fc419c3546c2336b64d730b",
"assets/packages/manage_account/assets/images/take_break_bottom_sheet.png": "cc6551bd50e3ecdd24dc20b6aea7ec00",
"assets/packages/manage_account/assets/images/block_user.webp": "887166f00682d0dabe2e26ab6a55e059",
"assets/packages/manage_account/assets/images/logout.png": "83b06f5ceabc9b58c2bbc61beb126efa",
"assets/packages/manage_account/assets/images/hand_bye.png": "c4183d44d3307f4f2990b973c49fafda",
"assets/packages/manage_account/assets/images/manage_accounts.png": "3527740be8828683eed813cf1339b522",
"assets/packages/manage_account/assets/images/balance.png": "0083e9ec0d34744b5975a070efe93f44",
"assets/packages/manage_account/assets/images/forward_button_ios.png": "87ba8a0ac17f3b9fe79d306cd9339517",
"assets/packages/manage_account/assets/images/aadhar_bottom_sheet.png": "a43f440d4d80f00a954c6a471d74c5d5",
"assets/packages/manage_account/assets/images/bin.png": "54ad9a4a71c1b040debb585f31072eb4",
"assets/packages/manage_account/assets/images/circle_minus.png": "6ac9e336e5fc946543c8dd1a851b8950",
"assets/packages/manage_account/assets/images/delete.png": "e1fd20990eefc0255add697f63c1ed48",
"assets/packages/manage_account/assets/images/recommended.png": "b21dffc762ce828883dfc3f7bc435714",
"assets/packages/manage_account/assets/images/pokerstars/broken_heart.png": "0342c381b9f279cf8cbb4d579c95e973",
"assets/packages/manage_account/assets/images/pokerstars/wallet.png": "c78c5909a4812ffcf53f096e868fa7e6",
"assets/packages/manage_account/assets/images/pokerstars/otp_lock.png": "16b715af2c7b34b8b07bb0865c0370e7",
"assets/packages/manage_account/assets/images/pokerstars/hand_bye.png": "e7c26c1cdbb4a1cbce8a500287eb981a",
"assets/packages/manage_account/assets/images/pokerstars/bin.png": "e1905e0cc254ec02db944153b87c16cd",
"assets/packages/manage_account/assets/images/pokerstars/crown.png": "1dcf1b208c97c5b5f89b96f73cce5aed",
"assets/packages/manage_account/assets/images/verification_failed.png": "be880d3f7198bd241e9a7829f4502f51",
"assets/packages/manage_account/assets/images/pending_bottom_sheet.png": "005370f68e861bf5c966294bb1e14b88",
"assets/packages/manage_account/assets/images/circle_biee.png": "c4183d44d3307f4f2990b973c49fafda",
"assets/packages/manage_account/assets/images/under_verification.png": "e3b44ba96facc630db2a9f95f5e1ab86",
"assets/packages/manage_account/assets/images/crown.png": "a63d87d7f06b97ed3a83b5345c998c4d",
"assets/packages/manage_account/assets/images/aadhar_front.png": "e1c57cf6069b4d282978a76c918fc35d",
"assets/packages/manage_account/assets/images/phone_bottom_sheet.png": "17e913110e639d1dda3dbc568dcdb964",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8d4049fe5a66af0df886b8dc5f4a229f",
"assets/fonts/MaterialIcons-Regular.otf": "b0aec8569b08490bc944810f4568530f",
"assets/assets/images/kyc/pan_img_cut.png": "a4a6714f51e88ecc61b3b2a0c163a52f",
"assets/assets/images/kyc/vector.png": "48361e9e382c0749cb09baaeba604eea",
"assets/assets/images/kyc/secure.png": "cbdf4ed9c09fb6ccbc304f2942d15df5",
"assets/assets/images/kyc/upload_icon.png": "7211c94dca9e4523121382cf53297596",
"assets/assets/images/kyc/verification_success.png": "20362f167c727986ca722ac516bda315",
"assets/assets/images/kyc/pan_blur.png": "144915208490c18e0be24035341c42b0",
"assets/assets/images/kyc/cross.svg": "47d5c79650695b4dacf4c286d1ef676d",
"assets/assets/images/kyc/done.svg": "2f28af518d0159ec79faf2d472d033cf",
"assets/assets/images/kyc/pan_placeholder.png": "79f6fe970848ce0febe146c4b2d66052",
"assets/assets/images/logo/rummy.png": "54caf55a20dd08443d1f2673f8b8836b",
"assets/assets/images/logo/poker.png": "3fd28898b76f3bed1102dec294053816",
"assets/assets/images/logo/howzat.png": "11fd56d1539a5e1ef12da70b595d8f5a",
"assets/assets/images/icons/red_chip.png": "84b18d449cbf63f10acee2b61fdade3f",
"assets/assets/images/icons/wallet_plus.png": "e135eb43685243d385c96aa4d70980ad",
"assets/assets/images/icons/remove_red.png": "fb0587b937ebf2922e59b1415b92b5f7",
"assets/assets/images/icons/profile.png": "66cadb0df2cc2e44b980083b2ec2cf4f",
"assets/assets/images/howzat/tds/bulb.svg": "ebb13d9f4f183de591e4bea7fe0c973b",
"assets/assets/images/howzat/tds/law.svg": "02ac21851e5966efab90006555ccd786",
"assets/assets/images/howzat/tds/certificate.svg": "4a60d90957e855aeda961b2f8851e229",
"assets/assets/images/howzat/tds/arrow_pokerstar.gif": "bd13547d6d6ee1eec3bacfcb7fcf76ba",
"assets/assets/images/howzat/tds/emblem.png": "fc90a01ad3edb7f7dc57206009a6a43f",
"assets/assets/images/howzat/tds/black_legal.svg": "012679315433a4e413985b099af6c14f",
"assets/assets/images/howzat/tds/refund.svg": "6d3bbcd6fe07073bee6adcef58195ad0",
"assets/assets/images/howzat/tds/withdraw_without_tax.png": "c6323cebbc393fad0a92938d7f6b6cdb",
"assets/assets/images/howzat/tds/document.svg": "13223f6abd745735bc1ce22b935aa5c6",
"assets/assets/images/howzat/tds/bulb.png": "0bc6d6ba362eb8ae91acaf2d8065ceab",
"assets/assets/images/howzat/tds/legal.svg": "5b96d97bdf83c01b06313238f4a5fb8b",
"assets/assets/images/howzat/tds/gift.png": "f6b4d63166178f4d3c11f43f0b5f6cb7",
"assets/assets/images/howzat/tds/book.webp": "b7fe09e9cc1b2cb3444fc38b5611e20d",
"assets/assets/images/howzat/tds/legal_2.svg": "e330584a1ca6a2062335b9a755b6dd10",
"assets/assets/images/howzat/tds/recommendedIcon.png": "bde330fc448cd45bf3db1b541f297db1",
"assets/assets/images/howzat/tds/arrow.gif": "a30dc0d4c561d705e89ff34b8264e8e2",
"assets/assets/images/howzat/tds/tds_confirmation.png": "11298211f7509ed518788426db22f5c1",
"assets/assets/images/howzat/tds/percent.png": "d793abaaf85d50ca860641fbec1ac4dd",
"assets/assets/images/howzat/tds/withdraw_with_tax.png": "0b0a900e6bd20d80b94c65b85f93b152",
"assets/assets/images/games/rummy.png": "9a06f2721936c716fa819822b839827c",
"assets/assets/images/games/tile_new_tab.json": "f3cb1d01f3b7e2f2778810260f02f527",
"assets/assets/images/games/ludo.png": "762a4a885283eab4af4567f6d7ce6d1e",
"assets/assets/images/games/poker.png": "0511aff7471dc1fcf93e43895d5d6444",
"assets/assets/images/games/howzat.png": "beb334d83fc6385df8bb0c5f4ebbe8bd",
"assets/assets/images/games/howzatV2-highlight.png": "22dcda9205749b4dceec7c518436b23d",
"assets/assets/images/games/howzatV2.png": "e2db46c9ff3a4b3ed240a38164a6157f",
"assets/assets/lottie/pokerstar_circular_loader.json": "1832bc96fb52e27440b13eb750e716e1",
"assets/assets/lottie/howzat_splash_loader.json": "830e539742814c7a4f70a46912ee7ca3",
"assets/assets/lottie/contacts_loading.json": "c01a5443c5973d47e259f39aa0b33857",
"assets/assets/lottie/circular_loader.json": "15a641ba9057d76057a7f266ac7f8032",
"assets/assets/lottie/poker_suits_icons.json": "9bb658ce8b6f23b888c77718e49172ab",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
