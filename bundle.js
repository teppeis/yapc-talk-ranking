(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(global, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else {
        // Global
        global.htmlspecialchars = factory();
    }
})(this, function() {
    'use strict';

    return function(str) {
        if (str == null) return '';

        return String(str).
            replace(/&/g, '&amp;').
            replace(/</g, '&lt;').
            replace(/>/g, '&gt;').
            replace(/"/g, '&quot;').
            replace(/'/g, '&#039;');
    };
});

},{}],2:[function(require,module,exports){
module.exports={
  "date": 1434938450282,
  "ranking": [
    {
      "path": "/2015/talk/show/de9e7a1e-136d-11e5-a9fc-d9f87d574c3a",
      "title": "Perlの上にも三年 〜 ずっとイケてるサービスを作り続ける技術 〜",
      "speaker_name": "趣味はマリンスポーツです",
      "speaker_url": "https://twitter.com/hitode909",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1753788808/sushi_r_normal.gif",
      "hatena": 145,
      "twitter": 164,
      "total": 722,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/c191c08a-0a98-11e5-be34-67dc7d574c3a",
      "title": "esa.io - 趣味から育てたWebサービスで生きていく",
      "speaker_name": "Atsuo Fukaya",
      "speaker_url": "https://github.com/fukayatsu",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1041857?v=3",
      "hatena": 110,
      "twitter": 170,
      "total": 628,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/9ec2791c-05e5-11e5-81fa-79c97d574c3a",
      "title": "世界展開する大規模ウェブサービスのデプロイを支える技術",
      "speaker_name": "aereal",
      "speaker_url": "https://github.com/aereal",
      "speaker_icon": "https://avatars.githubusercontent.com/u/87649?v=3",
      "hatena": 107,
      "twitter": 140,
      "total": 566,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/f2816038-10ec-11e5-89bf-d7f07d574c3a",
      "title": "我々はどのように冗長化を失敗したのか",
      "speaker_name": "Kenji Naito",
      "speaker_url": "https://github.com/kenjiskywalker",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1315074?v=3",
      "hatena": 69,
      "twitter": 124,
      "total": 425,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/86ebd212-fab3-11e4-8f5a-8ab37d574c3a",
      "title": "ISUCONの勝ち方",
      "speaker_name": "Masahiro Nagano",
      "speaker_url": "https://github.com/kazeburo",
      "speaker_icon": "https://avatars.githubusercontent.com/u/46764?v=3",
      "hatena": 64,
      "twitter": 123,
      "total": 408,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/c5ea5428-fac9-11e4-88c1-8ab37d574c3a",
      "title": "Google Cloud Platformの謎テクノロジーを掘り下げる",
      "speaker_name": "Kazunori Sato",
      "speaker_url": "https://github.com/kazunori279",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1623040?v=3",
      "hatena": 59,
      "twitter": 118,
      "total": 384,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/441c0b72-036f-11e5-851f-79c97d574c3a",
      "title": "技術顧問というお仕事",
      "speaker_name": "Naoya Ito",
      "speaker_url": "https://github.com/naoya",
      "speaker_icon": "https://avatars.githubusercontent.com/u/8991?v=3",
      "hatena": 77,
      "twitter": 69,
      "total": 351,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/b335dee0-09ad-11e5-8d7a-67dc7d574c3a",
      "title": "Consulと自作OSSを活用した100台規模のWebサービス運用",
      "speaker_name": "fujiwara",
      "speaker_url": "https://twitter.com/fujiwara",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1295745651/fujiwara-icon-s_normal.png",
      "hatena": 60,
      "twitter": 84,
      "total": 327,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/4bab2728-00fa-11e5-9931-79c97d574c3a",
      "title": "Web由来の組み込みエンジニアの半年間のすべて 〜WebとiOSとBLEとハードウェアデバイスのこと〜",
      "speaker_name": "Kazuhiro Homma",
      "speaker_url": "https://github.com/kazuph",
      "speaker_icon": "https://avatars.githubusercontent.com/u/849165?v=3",
      "hatena": 51,
      "twitter": 97,
      "total": 323,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/3d2d946a-0979-11e5-9800-67dc7d574c3a",
      "title": "老化について",
      "speaker_name": "Dan Kogai",
      "speaker_url": "https://twitter.com/dankogai",
      "speaker_icon": "http://pbs.twimg.com/profile_images/419164963416985600/QtvOEPl5_normal.jpeg",
      "hatena": 48,
      "twitter": 95,
      "total": 311,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/4f85e87a-f9ec-11e4-8262-8ab37d574c3a",
      "title": "3分でサービスのOSを入れ替える技術",
      "speaker_name": "SHIBATA Hiroshi",
      "speaker_url": "https://github.com/hsbt",
      "speaker_icon": "https://avatars.githubusercontent.com/u/12301?v=3",
      "hatena": 55,
      "twitter": 64,
      "total": 277,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/621948f2-0d46-11e5-a403-67dc7d574c3a",
      "title": "PHP帝国の逆襲！（を願うPHPerが話す最近のPHPについてのクイックツアー PHP7対応版）",
      "speaker_name": "うずら",
      "speaker_url": "https://twitter.com/uzulla",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000122330373/c9162e04e2a5fb779758cc4f0a13c2c0_normal.jpeg",
      "hatena": 45,
      "twitter": 80,
      "total": 275,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/7d62caf8-12f4-11e5-881c-d9f87d574c3a",
      "title": "技術ブログを書くことについて語るときに僕の語ること",
      "speaker_name": "yuuki",
      "speaker_url": "https://twitter.com/y_uuk1",
      "speaker_icon": "http://pbs.twimg.com/profile_images/3279630066/5fec6321a3aca8de271ccb3fae606d2a_normal.png",
      "hatena": 53,
      "twitter": 63,
      "total": 269,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/523b9508-0d77-11e5-8174-67dc7d574c3a",
      "title": "うっかりをなくす技術",
      "speaker_name": "karupanerura",
      "speaker_url": "https://github.com/karupanerura",
      "speaker_icon": "https://avatars.githubusercontent.com/u/374550?v=3",
      "hatena": 55,
      "twitter": 60,
      "total": 269,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/0dcfc436-133d-11e5-9f77-d9f87d574c3a",
      "title": "なぜ、ピクシブの新卒は総合職でもプログラムが書けるのか。",
      "speaker_name": "Atom（アトム）",
      "speaker_url": "https://twitter.com/FromAtom",
      "speaker_icon": "http://pbs.twimg.com/profile_images/587446491523854336/PZI2lpPm_normal.jpg",
      "hatena": 47,
      "twitter": 72,
      "total": 267,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/3cc6d49c-faa0-11e4-b634-8ab37d574c3a",
      "title": "Inside of Bokete 〜 チーム、アーキテクチャ、実装",
      "speaker_name": "Yusuke Wada",
      "speaker_url": "https://www.facebook.com/631255029",
      "speaker_icon": "http://graph.facebook.com/631255029/picture",
      "hatena": 34,
      "twitter": 89,
      "total": 258,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/607595a2-0df3-11e5-b447-67dc7d574c3a",
      "title": "運用を楽にするためのアプリケーションコードを書く技術",
      "speaker_name": "Naotoshi Seo",
      "speaker_url": "https://github.com/sonots",
      "speaker_icon": "https://avatars.githubusercontent.com/u/2290461?v=3",
      "hatena": 51,
      "twitter": 58,
      "total": 254,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/5b1cd536-07ed-11e5-9e42-79c97d574c3a",
      "title": "Mackerel開発におけるScalaとGo、そしてPerl",
      "speaker_name": "songmu",
      "speaker_url": "https://twitter.com/songmu",
      "speaker_icon": "http://pbs.twimg.com/profile_images/538947384420483072/5WmJP-fh_normal.jpeg",
      "hatena": 45,
      "twitter": 65,
      "total": 249,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/39a15ad4-0ff5-11e5-a984-d7f07d574c3a",
      "title": "実はホットでオープンな Microsoft Azure のインフラ",
      "speaker_name": "Tatsuro Hisamori",
      "speaker_url": "https://www.facebook.com/100000459480102",
      "speaker_icon": "http://graph.facebook.com/100000459480102/picture",
      "hatena": 36,
      "twitter": 77,
      "total": 243,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/dead6890-09b7-11e5-998a-67dc7d574c3a",
      "title": "HTTP/2 & クラウド時代のウェブアプリケーション実行基盤",
      "speaker_name": "Kazuho Oku",
      "speaker_url": "https://twitter.com/kazuho",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1656455610/__________2011-11-25_12.16.30__normal.png",
      "hatena": 41,
      "twitter": 62,
      "total": 231,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/bb82c8fc-12a3-11e5-962e-d9f87d574c3a",
      "title": "Yet Another Perl Cooking",
      "speaker_name": "moznion",
      "speaker_url": "https://github.com/moznion",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1422834?v=3",
      "hatena": 39,
      "twitter": 64,
      "total": 229,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/53aacc02-faca-11e4-8c2e-8ab37d574c3a",
      "title": "辛いことをやめる！から始まる業務改善とInfrastructure as Code",
      "speaker_name": "Yuichiro SAITO",
      "speaker_url": "https://twitter.com/koemu",
      "speaker_icon": "http://pbs.twimg.com/profile_images/3685820543/1e8215b4268fef1d97891e3d61b7b361_normal.png",
      "hatena": 38,
      "twitter": 65,
      "total": 228,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/82e93a96-f60e-11e4-907e-8ab37d574c3a",
      "title": "どうしてこうなった？ Node.jsとio.jsの分裂と統合の行方。これからどう進化していくのか？",
      "speaker_name": "Yosuke FURUKAWA",
      "speaker_url": "https://twitter.com/yosuke_furukawa",
      "speaker_icon": "http://pbs.twimg.com/profile_images/206948941/wall-e_normal.jpg",
      "hatena": 38,
      "twitter": 63,
      "total": 224,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/1e976f9e-0046-11e5-a69c-89c77d574c3a",
      "title": "エンジニア向けSaaSの作り方",
      "speaker_name": "Shinji Tanaka",
      "speaker_url": "https://github.com/stanaka",
      "speaker_icon": "https://avatars.githubusercontent.com/u/10042?v=3",
      "hatena": 46,
      "twitter": 48,
      "total": 221,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/44721562-10e4-11e5-88a0-d7f07d574c3a",
      "title": "Effective ES6",
      "speaker_name": "Teppei Sato",
      "speaker_url": "https://github.com/teppeis",
      "speaker_icon": "https://avatars.githubusercontent.com/u/26476?v=3",
      "hatena": 28,
      "twitter": 77,
      "total": 219,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/ce0167b6-10f7-11e5-8178-d7f07d574c3a",
      "title": "実例から学ぶWeb/スマホアプリケーションの脆弱性",
      "speaker_name": "mala",
      "speaker_url": "https://github.com/mala",
      "speaker_icon": "https://avatars.githubusercontent.com/u/51196?v=3",
      "hatena": 40,
      "twitter": 55,
      "total": 216,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/a7e23d1c-fd42-11e4-ab7e-bdc07d574c3a",
      "title": "ぼくとハシモトさん、あるいはHashitoolsを用いたインフラ自動化に関する偏った入門",
      "speaker_name": "Uchio KONDO",
      "speaker_url": "https://twitter.com/udzura",
      "speaker_icon": "http://pbs.twimg.com/profile_images/541797238473625600/pi2i_yLc_normal.jpeg",
      "hatena": 38,
      "twitter": 53,
      "total": 207,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/32392ef8-1314-11e5-865c-d9f87d574c3a",
      "title": "さよなら哀スレッド ～ わが青春の愛スレッド",
      "speaker_name": "makamaka@どんぞこ楽屋",
      "speaker_url": "https://twitter.com/maka2_donzoko",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1094520798/icon2010_normal.png",
      "hatena": 34,
      "twitter": 55,
      "total": 198,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/dd8ce20e-fad2-11e4-b6e7-8ab37d574c3a",
      "title": "データ分析基盤を支える技術",
      "speaker_name": "Masahiro Nakagawa",
      "speaker_url": "https://github.com/repeatedly",
      "speaker_icon": "https://avatars.githubusercontent.com/u/16928?v=3",
      "hatena": 29,
      "twitter": 59,
      "total": 190,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/bbb0162a-0350-11e5-bb2f-79c97d574c3a",
      "title": "Dockerで開発環境を構築したその後",
      "speaker_name": "こんぼい。",
      "speaker_url": "https://twitter.com/Konboi",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000795654240/88bfe7df3471f3264c38ad407ce020e0_normal.png",
      "hatena": 36,
      "twitter": 45,
      "total": 186,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/3ea83132-1352-11e5-9978-d9f87d574c3a",
      "title": "MogileFSをバックエンドとしたPrivate S3の作り方",
      "speaker_name": "kuroda",
      "speaker_url": "https://twitter.com/lamanotrama",
      "speaker_icon": "http://pbs.twimg.com/profile_images/3422978396/f4d40662ca0c078b9087a50985350269_normal.jpeg",
      "hatena": 30,
      "twitter": 54,
      "total": 184,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/5f5cad74-004a-11e5-acf4-89c77d574c3a",
      "title": "我々にできるOSSとそのコミュニティの育てかた",
      "speaker_name": "tagomoris",
      "speaker_url": "https://twitter.com/tagomoris",
      "speaker_icon": "http://pbs.twimg.com/profile_images/525991223060746241/_ORoKYuX_normal.png",
      "hatena": 30,
      "twitter": 52,
      "total": 181,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/c2f85686-0df5-11e5-9e74-67dc7d574c3a",
      "title": "スタートアップの創業期を支える技術",
      "speaker_name": "Tatsuya Arai",
      "speaker_url": "https://twitter.com/cutmail",
      "speaker_icon": "http://pbs.twimg.com/profile_images/565897212085800963/VhOCE-By_normal.jpeg",
      "hatena": 35,
      "twitter": 43,
      "total": 180,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/a80e57c8-133e-11e5-93ad-d9f87d574c3a",
      "title": "MySQLを使って開発をはじめるときに気をつけておきたいこと",
      "speaker_name": "Ryuta Kamizono",
      "speaker_url": "https://twitter.com/kamipo",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000433176090/1178e800687095ff11c540ddead1f4ff_normal.png",
      "hatena": 28,
      "twitter": 54,
      "total": 179,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/2a4efafe-136b-11e5-9923-d9f87d574c3a",
      "title": "私はいかにして妻を説得してYAPCに立つに至ったか",
      "speaker_name": "chezou",
      "speaker_url": "https://twitter.com/chezou",
      "speaker_icon": "http://pbs.twimg.com/profile_images/3512660657/c7724f0f2022e87c568dec7af95909a6_normal.jpeg",
      "hatena": 31,
      "twitter": 49,
      "total": 179,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/04a4c95c-0fea-11e5-9a0f-d7f07d574c3a",
      "title": "今から備えるMySQL最新バージョン5.7",
      "speaker_name": "yoku0825",
      "speaker_url": "https://twitter.com/yoku0825",
      "speaker_icon": "http://pbs.twimg.com/profile_images/3445683412/bdbf36104036584029165edc231d6bc3_normal.jpeg",
      "hatena": 29,
      "twitter": 49,
      "total": 173,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/92a7bb60-1323-11e5-a252-d9f87d574c3a",
      "title": "Perl で RTB の最前線を闘い抜く",
      "speaker_name": "Satoshi Ohkubo",
      "speaker_url": "https://www.facebook.com/1121132103",
      "speaker_icon": "http://graph.facebook.com/1121132103/picture",
      "hatena": 28,
      "twitter": 51,
      "total": 173,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/9d2d46c8-0dcd-11e5-b407-67dc7d574c3a",
      "title": "【池澤あやか × あらたま】Webエンジニアのためのメディアアート入門（仮）",
      "speaker_name": "あらたま",
      "speaker_url": "https://twitter.com/ar_tama",
      "speaker_icon": "http://pbs.twimg.com/profile_images/510471574445510658/GKytGPut_normal.jpeg",
      "hatena": 27,
      "twitter": 52,
      "total": 172,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/0974fb38-facc-11e4-9382-8ab37d574c3a",
      "title": "Infrastructure as Codeを語る時に欠けていたもの",
      "speaker_name": "Masashi Terui",
      "speaker_url": "https://github.com/marcy-terui",
      "speaker_icon": "https://avatars.githubusercontent.com/u/4560264?v=3",
      "hatena": 32,
      "twitter": 42,
      "total": 169,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/a668ef3e-080b-11e5-b2b4-79c97d574c3a",
      "title": "どうしてもPerlでドローンを飛ばしたい人のためのハードウェアハック概論",
      "speaker_name": "macopy",
      "speaker_url": "https://twitter.com/mackee_w",
      "speaker_icon": "http://pbs.twimg.com/profile_images/419456734264954880/FYDksW9H_normal.jpeg",
      "hatena": 27,
      "twitter": 47,
      "total": 163,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/94051590-fb11-11e4-a39d-8ab37d574c3a",
      "title": "今フロントエンドで何が起こっているのか",
      "speaker_name": "Toru Kobayashi",
      "speaker_url": "https://github.com/koba04",
      "speaker_icon": "https://avatars.githubusercontent.com/u/250407?v=3",
      "hatena": 27,
      "twitter": 46,
      "total": 161,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/c2c7b8a4-faaa-11e4-a8be-8ab37d574c3a",
      "title": "サーバーサイドエンジニア(特にPerl)のためのiOSアプリ開発入門",
      "speaker_name": "Daisuke Murase",
      "speaker_url": "https://github.com/typester",
      "speaker_icon": "https://avatars.githubusercontent.com/u/3420?v=3",
      "hatena": 26,
      "twitter": 47,
      "total": 160,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/897abeb2-1007-11e5-a760-d7f07d574c3a",
      "title": "Perlがメインじゃない現場でもPerlを使う(AdTech現場編）",
      "speaker_name": "Masaru Hoshino",
      "speaker_url": "https://github.com/masartz",
      "speaker_icon": "https://avatars.githubusercontent.com/u/49303?v=3",
      "hatena": 27,
      "twitter": 43,
      "total": 156,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/93f39c88-ffa4-11e4-aa4d-66c47d574c3a",
      "title": "はてなの社長になってみて",
      "speaker_name": "栗栖義臣",
      "speaker_url": "https://twitter.com/chris4403",
      "speaker_icon": "http://pbs.twimg.com/profile_images/495102627399479297/xWshlRMW_normal.jpeg",
      "hatena": 27,
      "twitter": 41,
      "total": 153,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/1de1adc8-1165-11e5-b6ef-d7f07d574c3a",
      "title": "続々とリリースされるサービスのインフラを支える技術",
      "speaker_name": "きいあむ / YASUTAKE K.",
      "speaker_url": "https://twitter.com/key_amb",
      "speaker_icon": "http://pbs.twimg.com/profile_images/604586076024340480/EIbpIzsF_normal.jpg",
      "hatena": 25,
      "twitter": 44,
      "total": 152,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/9672d326-1344-11e5-8c52-d9f87d574c3a",
      "title": "脆弱性もバグ、だからテストしよう！",
      "speaker_name": "cakephper",
      "speaker_url": "https://twitter.com/cakephper",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1121974486/ichikaway_jp3_normal.jpg",
      "hatena": 24,
      "twitter": 44,
      "total": 149,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/cd2c903e-1333-11e5-898e-d9f87d574c3a",
      "title": "エンジニアの技術力評価は難しい？ - 相互評価制度を約4年やってみたけど、わりと良い感じかもしれない -",
      "speaker_name": "Masanori KOGA",
      "speaker_url": "https://twitter.com/makoga",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1214405156/koga300dpi_normal.jpg",
      "hatena": 18,
      "twitter": 52,
      "total": 145,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/9f7059dc-003c-11e5-a00c-89c77d574c3a",
      "title": "Perlで学ぼう！文系プログラマのための、知識ゼロからのデータ構造と計算量",
      "speaker_name": "Shinpei Maruyama",
      "speaker_url": "https://github.com/Shinpeim",
      "speaker_icon": "https://avatars.githubusercontent.com/u/876988?v=3",
      "hatena": 32,
      "twitter": 28,
      "total": 144,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/d099f154-fd66-11e4-9b2b-bdc07d574c3a",
      "title": "「ウチの人事がイケてない」と嘆くエンジニアのための「採用」入門講座",
      "speaker_name": "みそ ｼﾞﾝｼﾞﾆｱ",
      "speaker_url": "https://twitter.com/crazygirl_lover",
      "speaker_icon": "http://pbs.twimg.com/profile_images/599568269507342336/jb_Rk7sX_normal.jpg",
      "hatena": 23,
      "twitter": 39,
      "total": 137,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/9e9ae188-fb20-11e4-9a97-8ab37d574c3a",
      "title": "HTTP2 時代の Web",
      "speaker_name": "Jxck",
      "speaker_url": "https://github.com/Jxck",
      "speaker_icon": "https://avatars.githubusercontent.com/u/322289?v=3",
      "hatena": 26,
      "twitter": 34,
      "total": 137,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/ec228764-1329-11e5-953f-d9f87d574c3a",
      "title": "若者とスタートアップの二年半 〜Gunosy創業から上場、そしてこれから〜",
      "speaker_name": "松本 勇気",
      "speaker_url": "https://twitter.com/y_matsuwitter",
      "speaker_icon": "http://pbs.twimg.com/profile_images/3290639266/a767076172e2d30e41963b41e27c9beb_normal.jpeg",
      "hatena": 17,
      "twitter": 47,
      "total": 133,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/b396e912-091a-11e5-8d2d-67dc7d574c3a",
      "title": "大規模でも小中規模サービスでも捗る microservices な Web サービスのつくりかた",
      "speaker_name": "Kazuhiro Osawa",
      "speaker_url": "https://github.com/yappo",
      "speaker_icon": "https://avatars.githubusercontent.com/u/9958?v=3",
      "hatena": 23,
      "twitter": 35,
      "total": 130,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/b9e8b650-135c-11e5-bd7f-d9f87d574c3a",
      "title": "ケーススタディで考えるウェブフロントエンドパフォーマンスチューニング",
      "speaker_name": "ダメレオン",
      "speaker_url": "https://twitter.com/damele0n",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1323645880/Icon-rainbow_reasonably_small_normal.jpeg",
      "hatena": 22,
      "twitter": 36,
      "total": 129,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/c61a32a4-f797-11e4-bcef-8ab37d574c3a",
      "title": "WebAudio で入門する信号処理",
      "speaker_name": "cho45",
      "speaker_url": "https://github.com/cho45",
      "speaker_icon": "https://avatars.githubusercontent.com/u/3092?v=3",
      "hatena": 24,
      "twitter": 33,
      "total": 129,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/f5b888b2-1344-11e5-b22a-d9f87d574c3a",
      "title": "Vimmerよ、IDEというパワードスーツを身にまとい、コードに立ち向かえ！",
      "speaker_name": "Masashi Shinbara",
      "speaker_url": "https://twitter.com/shin1x1",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1118038428/be5c756e-ae2f-49b6-8c7b-bd8508b6dc93_normal.png",
      "hatena": 24,
      "twitter": 32,
      "total": 128,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/96ce1990-fa38-11e4-83b7-8ab37d574c3a",
      "title": "「昔の普通」から「今の普通」へ繋ぐ安心の架け橋",
      "speaker_name": "Wataru MIYAGUNI",
      "speaker_url": "https://github.com/gongo",
      "speaker_icon": "https://avatars.githubusercontent.com/u/124713?v=3",
      "hatena": 12,
      "twitter": 51,
      "total": 126,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/d7d148f0-f66d-11e4-8734-8ab37d574c3a",
      "title": "とある会社の新人研修 〜GaiaXにおける新人研修の取り組み, 或いはPerlを主軸とした｢知の高速道路｣について〜",
      "speaker_name": "papix",
      "speaker_url": "https://twitter.com/__papix__",
      "speaker_icon": "http://pbs.twimg.com/profile_images/596297145994481664/KWANlRTk_normal.png",
      "hatena": 25,
      "twitter": 29,
      "total": 125,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/a4318242-f5f2-11e4-afb7-49b37d574c3a",
      "title": "実践nginxモジュール開発〜CとLua〜",
      "speaker_name": "Tatsuhiko Kubo",
      "speaker_url": "https://github.com/cubicdaiya",
      "speaker_icon": "https://avatars.githubusercontent.com/u/56752?v=3",
      "hatena": 27,
      "twitter": 25,
      "total": 124,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/cc8f1b48-0e32-11e5-9147-67dc7d574c3a",
      "title": "普通のことを普通にやれば、いいプログラムになる",
      "speaker_name": "Shoichi Kaji",
      "speaker_url": "https://github.com/shoichikaji",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1589550?v=3",
      "hatena": 22,
      "twitter": 33,
      "total": 123,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/cf39f7fc-ff44-11e4-9264-66c47d574c3a",
      "title": "Podcastを支える技術、エンジニアのためのWebメディア、そしてCPAN",
      "speaker_name": "Yusuke Wada",
      "speaker_url": "https://www.facebook.com/631255029",
      "speaker_icon": "http://graph.facebook.com/631255029/picture",
      "hatena": 18,
      "twitter": 39,
      "total": 122,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/a636430c-0fbf-11e5-8a02-43ec7d574c3a",
      "title": "メリークリスマス！",
      "speaker_name": "Larry Wall",
      "speaker_url": "https://github.com/TimToady",
      "speaker_icon": "https://avatars.githubusercontent.com/u/162146?v=3",
      "hatena": 22,
      "twitter": 32,
      "total": 122,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/20a090d0-1113-11e5-bbd3-d7f07d574c3a",
      "title": "非エンジニア参加型 ChatOps でソシャゲ運用",
      "speaker_name": "Makoto Shiga",
      "speaker_url": "https://github.com/MacoTasu",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1475923?v=3",
      "hatena": 22,
      "twitter": 30,
      "total": 118,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/c495bb3c-1340-11e5-b434-d9f87d574c3a",
      "title": "一体何がエンジニア職社員「交換留学」の取り組みによってチームとメンバーに変革をもたらしたのか",
      "speaker_name": "Toshiaki Koshiba",
      "speaker_url": "https://github.com/bash0C7",
      "speaker_icon": "https://avatars.githubusercontent.com/u/137741?v=3",
      "hatena": 16,
      "twitter": 40,
      "total": 118,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/f5aa5054-12fd-11e5-b4c9-d9f87d574c3a",
      "title": "はてなブックマークのトピックページの裏側",
      "speaker_name": "skozawa",
      "speaker_url": "https://twitter.com/5kozawa",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1711030185/header_title_normal.jpg",
      "hatena": 18,
      "twitter": 36,
      "total": 117,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/f279d804-0efd-11e5-bc53-43ec7d574c3a",
      "title": "尋常じゃない速度でドッグフードを食べる方法",
      "speaker_name": "Yuta Kurotaki",
      "speaker_url": "https://github.com/kurotaky",
      "speaker_icon": "https://avatars.githubusercontent.com/u/866589?v=3",
      "hatena": 19,
      "twitter": 33,
      "total": 115,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/39a72c04-10e3-11e5-b8ab-d7f07d574c3a",
      "title": "perlワンライナー入門",
      "speaker_name": "Akira Sakamoto",
      "speaker_url": "https://www.facebook.com/929494707114841",
      "speaker_icon": "http://graph.facebook.com/929494707114841/picture",
      "hatena": 19,
      "twitter": 33,
      "total": 115,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/d78f1c60-0814-11e5-b740-79c97d574c3a",
      "title": "POSIX原理主義 ― どこでも動く、20年動く、コピー一発デプロイ完了、な理想郷はシェルスクリプトで築かれる",
      "speaker_name": "Rich Mikan",
      "speaker_url": "https://github.com/richmikan",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1249622?v=3",
      "hatena": 22,
      "twitter": 27,
      "total": 113,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/23fa9706-0e40-11e5-829d-67dc7d574c3a",
      "title": "レガシーなperlのweb開発から少しだけ今風なperlのweb開発へ。継続可能な開発へ。",
      "speaker_name": "SUZUKI Masashi",
      "speaker_url": "https://github.com/masasuzu",
      "speaker_icon": "https://avatars.githubusercontent.com/u/271100?v=3",
      "hatena": 16,
      "twitter": 37,
      "total": 113,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/205b57a0-135b-11e5-8725-d9f87d574c3a",
      "title": "Backbone, Chaplin, Marionette そして React - Quipper における Single Page Application 開発の変遷",
      "speaker_name": "Kensuke Nagae",
      "speaker_url": "https://www.facebook.com/543316027",
      "speaker_icon": "http://graph.facebook.com/543316027/picture",
      "hatena": 19,
      "twitter": 32,
      "total": 113,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/0af26fe4-0b7b-11e5-a29c-67dc7d574c3a",
      "title": "MySQLで2億件のシリアルデータと格闘したチューニングの話",
      "speaker_name": "さいけん",
      "speaker_url": "https://twitter.com/saiken3110",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1205361823/img_791544_45327987_0_normal.jpg",
      "hatena": 18,
      "twitter": 34,
      "total": 113,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/66960c2c-1330-11e5-9c0d-d9f87d574c3a",
      "title": "はてなインターンの作り方",
      "speaker_name": "大西康裕",
      "speaker_url": "https://twitter.com/yasuhiro_onishi",
      "speaker_icon": "http://pbs.twimg.com/profile_images/583440287269171200/LfL9vF2I_normal.jpg",
      "hatena": 22,
      "twitter": 25,
      "total": 109,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/ad84b028-136e-11e5-b676-d9f87d574c3a",
      "title": "Making of Acme大全　- 冥キングな話、裏の裏まで全部＋αおまけ発表",
      "speaker_name": "makamaka@どんぞこ楽屋",
      "speaker_url": "https://twitter.com/maka2_donzoko",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1094520798/icon2010_normal.png",
      "hatena": 13,
      "twitter": 40,
      "total": 109,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/1da55daa-0deb-11e5-944c-67dc7d574c3a",
      "title": "PietでLISP処理系を書くのは難しい",
      "speaker_name": "Hideaki Nagamine",
      "speaker_url": "https://github.com/1995hnagamin",
      "speaker_icon": "https://avatars.githubusercontent.com/u/7394250?v=3",
      "hatena": 12,
      "twitter": 38,
      "total": 103,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/f93bc956-1333-11e5-ad76-d9f87d574c3a",
      "title": "FutureAutomation",
      "speaker_name": "Taichi Nakashima ☕️",
      "speaker_url": "https://twitter.com/deeeet",
      "speaker_icon": "http://pbs.twimg.com/profile_images/2622062878/idqr0s42fhsfc74wa7c5_normal.jpeg",
      "hatena": 13,
      "twitter": 36,
      "total": 102,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/6b582f7e-0228-11e5-b3ca-79c97d574c3a",
      "title": "オンラインゲーム・スマートフォンゲームを「支える技術」と「物語」",
      "speaker_name": "Yoshikazu Fukushima",
      "speaker_url": "https://www.facebook.com/10206549291592204",
      "speaker_icon": "http://graph.facebook.com/10206549291592204/picture",
      "hatena": 18,
      "twitter": 27,
      "total": 101,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/7d66b640-0a6b-11e5-b1a0-67dc7d574c3a",
      "title": "Electron: Building desktop apps with web technologies",
      "speaker_name": "Ben Ogle",
      "speaker_url": "https://github.com/benogle",
      "speaker_icon": "https://avatars.githubusercontent.com/u/69169?v=3",
      "hatena": 14,
      "twitter": 33,
      "total": 100,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/aa08df46-f7ee-11e4-9737-8ab37d574c3a",
      "title": "あなたがハッカーじゃなくてもPull RequestをおくってOSSに貢献しよう",
      "speaker_name": "DQNEO",
      "speaker_url": "https://twitter.com/DQNEO",
      "speaker_icon": "http://pbs.twimg.com/profile_images/582905163389632513/unVsV-wC_normal.jpg",
      "hatena": 18,
      "twitter": 26,
      "total": 99,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/f168bf54-10b3-11e5-b640-d7f07d574c3a",
      "title": "新規サービス立ち上げから1年たって学んだこと　〜ハッカドールの捗る技術〜",
      "speaker_name": "mosa",
      "speaker_url": "https://twitter.com/mosa_siru",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000214753541/b3fdd930163a330b670a45b483606574_normal.jpeg",
      "hatena": 15,
      "twitter": 31,
      "total": 99,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/4d9157b2-110b-11e5-9b5f-d7f07d574c3a",
      "title": "テンプレートエンジンを7倍高速化するまで",
      "speaker_name": "Takashi Kokubun",
      "speaker_url": "https://github.com/k0kubun",
      "speaker_icon": "https://avatars.githubusercontent.com/u/3138447?v=3",
      "hatena": 16,
      "twitter": 28,
      "total": 97,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/38d1c04a-0766-11e5-bf81-79c97d574c3a",
      "title": "ふつうのWebアプリケーションエンジニアがitamae道をServerspecとともに歩んだ話",
      "speaker_name": "sugamasao",
      "speaker_url": "https://twitter.com/sugamasao",
      "speaker_icon": "http://pbs.twimg.com/profile_images/2854513767/53b25ddfd63d65633347aa82df323c5c_normal.png",
      "hatena": 10,
      "twitter": 37,
      "total": 95,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/20489b5c-05a4-11e5-81d9-79c97d574c3a",
      "title": "エンジニアのためのめっちゃわかりやすい会計入門",
      "speaker_name": "DQNEO",
      "speaker_url": "https://twitter.com/DQNEO",
      "speaker_icon": "http://pbs.twimg.com/profile_images/582905163389632513/unVsV-wC_normal.jpg",
      "hatena": 21,
      "twitter": 18,
      "total": 94,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/3cf2bee2-1358-11e5-b64e-d9f87d574c3a",
      "title": "HBase at FreakOut",
      "speaker_name": "Jiro Nishiguchi",
      "speaker_url": "https://github.com/spiritloose",
      "speaker_icon": "https://avatars.githubusercontent.com/u/13047?v=3",
      "hatena": 16,
      "twitter": 26,
      "total": 93,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/69b973e2-0de2-11e5-918e-67dc7d574c3a",
      "title": "最新技術はいかにして業務に取り入れうるか",
      "speaker_name": "ほと",
      "speaker_url": "https://twitter.com/hoto17296",
      "speaker_icon": "http://pbs.twimg.com/profile_images/574083036834197507/yeKZlpd4_normal.png",
      "hatena": 13,
      "twitter": 30,
      "total": 91,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/86fa062e-135a-11e5-a432-d9f87d574c3a",
      "title": "PostgreSQL で SQL プログラミング",
      "speaker_name": "yancya",
      "speaker_url": "https://twitter.com/yancya",
      "speaker_icon": "http://pbs.twimg.com/profile_images/449541105894174721/Tmgr9zRN_normal.jpeg",
      "hatena": 16,
      "twitter": 25,
      "total": 91,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/16b65b5a-0064-11e5-9c42-89c77d574c3a",
      "title": "技術系同人誌を作ってコミケで頒布しよう ――「Steins;Gate の世界観を使って Git を説明する本」Steins;Git の実例",
      "speaker_name": "Shota Kubota",
      "speaker_url": "https://twitter.com/kubosho_",
      "speaker_icon": "http://pbs.twimg.com/profile_images/501586383790563328/rwTNO_Cj_normal.jpeg",
      "hatena": 6,
      "twitter": 41,
      "total": 90,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/3fe49c10-fa67-11e4-9e02-8ab37d574c3a",
      "title": "Perl 5.22 and You",
      "speaker_name": "Ricardo Signes",
      "speaker_url": "https://github.com/rjbs",
      "speaker_icon": "https://avatars.githubusercontent.com/u/30682?v=3",
      "hatena": 12,
      "twitter": 29,
      "total": 87,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/909af06e-05ed-11e5-8e9a-79c97d574c3a",
      "title": "異業種から飛びこめ！ シロウト・プログラミングの方法と実践",
      "speaker_name": "Hiroaki Kadomatsu",
      "speaker_url": "https://www.facebook.com/711852115",
      "speaker_icon": "http://graph.facebook.com/711852115/picture",
      "hatena": 15,
      "twitter": 22,
      "total": 83,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/76135c88-136a-11e5-bf05-d9f87d574c3a",
      "title": "DBIx::Schema::DSL ~ PerlによるDSLモジュール開発とその活用と実践",
      "speaker_name": "songmu",
      "speaker_url": "https://twitter.com/songmu",
      "speaker_icon": "http://pbs.twimg.com/profile_images/538947384420483072/5WmJP-fh_normal.jpeg",
      "hatena": 13,
      "twitter": 25,
      "total": 83,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/a06d9970-0d7b-11e5-aaf9-67dc7d574c3a",
      "title": "Conway's Law of Distributed Work",
      "speaker_name": "Casey West",
      "speaker_url": "https://github.com/cwest",
      "speaker_icon": "https://avatars.githubusercontent.com/u/54422?v=3",
      "hatena": 11,
      "twitter": 28,
      "total": 82,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/32e7a270-1360-11e5-b2ec-d9f87d574c3a",
      "title": "技術ドキュメントの翻訳は自動化できるのか?",
      "speaker_name": "Yohei Yasukawa",
      "speaker_url": "https://twitter.com/yasulab",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000445530232/35d0d14c355a5d926fe42f4c5d3ab91b_normal.png",
      "hatena": 9,
      "twitter": 31,
      "total": 81,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/a0044cc4-130a-11e5-b0c6-d9f87d574c3a",
      "title": "いい技術文書とは何か",
      "speaker_name": "yuku takahashi",
      "speaker_url": "https://twitter.com/yuku_t",
      "speaker_icon": "http://pbs.twimg.com/profile_images/593648937413685248/81DdisOn_normal.png",
      "hatena": 17,
      "twitter": 17,
      "total": 80,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/4e5bf7f2-1362-11e5-8e54-d9f87d574c3a",
      "title": "アスカさんがツイッタークライアントを作る方法について教えてくれるそうです",
      "speaker_name": "Shinichiro Aska",
      "speaker_url": "https://github.com/s-aska",
      "speaker_icon": "https://avatars.githubusercontent.com/u/140584?v=3",
      "hatena": 11,
      "twitter": 27,
      "total": 80,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/034c0d1e-10d4-11e5-9c9b-d7f07d574c3a",
      "title": "perl/go での開発の比較",
      "speaker_name": "soh335",
      "speaker_url": "https://github.com/soh335",
      "speaker_icon": "https://avatars.githubusercontent.com/u/31937?v=3",
      "hatena": 15,
      "twitter": 19,
      "total": 78,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/46f6e730-0f14-11e5-ac41-43ec7d574c3a",
      "title": "From Perl to Haskell",
      "speaker_name": "Masahiro Honma",
      "speaker_url": "https://github.com/hiratara",
      "speaker_icon": "https://avatars.githubusercontent.com/u/45287?v=3",
      "hatena": 14,
      "twitter": 19,
      "total": 75,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/32a684e8-fd21-11e4-94eb-bdc07d574c3a",
      "title": "ソーシャルゲームにおける AWS 移行事例",
      "speaker_name": "tkuchiki",
      "speaker_url": "https://twitter.com/tkuchiki",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000732873806/db63a0f75f9a217a875fa02d2ce34c04_normal.png",
      "hatena": 16,
      "twitter": 16,
      "total": 75,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/0c1ab872-0ac7-11e5-acee-67dc7d574c3a",
      "title": "Perlで支える社内基盤 〜総集編〜",
      "speaker_name": "papix",
      "speaker_url": "https://twitter.com/__papix__",
      "speaker_icon": "http://pbs.twimg.com/profile_images/596297145994481664/KWANlRTk_normal.png",
      "hatena": 14,
      "twitter": 18,
      "total": 73,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/53944d48-09ba-11e5-998a-67dc7d574c3a",
      "title": "Perl6 on JVM: It works??",
      "speaker_name": "Tokuhiro Matsuno",
      "speaker_url": "https://github.com/tokuhirom",
      "speaker_icon": "https://avatars.githubusercontent.com/u/21084?v=3",
      "hatena": 15,
      "twitter": 16,
      "total": 72,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/21cb8176-065b-11e5-9492-79c97d574c3a",
      "title": "PolyglotのためのDocker - 我々はどこから来てどこへ向かうのか",
      "speaker_name": "Nathan LeClaire",
      "speaker_url": "https://twitter.com/upthecyberpunks",
      "speaker_icon": "http://pbs.twimg.com/profile_images/583855288354078720/NihdVx9o_normal.jpg",
      "hatena": 12,
      "twitter": 19,
      "total": 69,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/e8eebd70-f906-11e4-8f91-8ab37d574c3a",
      "title": "それは僕たちのドメイン・DNS運用",
      "speaker_name": "ぱんつの本質",
      "speaker_url": "https://twitter.com/jigyakkuma_",
      "speaker_icon": "http://pbs.twimg.com/profile_images/599475415766302720/IrXs2kkC_normal.png",
      "hatena": 11,
      "twitter": 20,
      "total": 68,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/5d70d0da-1346-11e5-8d94-d9f87d574c3a",
      "title": "npmコマンドを改善し続けた話",
      "speaker_name": "Daijiro Wachi",
      "speaker_url": "https://github.com/watilde",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1716463?v=3",
      "hatena": 9,
      "twitter": 22,
      "total": 65,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/20dd3ec6-1367-11e5-8295-d9f87d574c3a",
      "title": "ある程度大きな開発現場における DevOps の在り方にまつわる私見",
      "speaker_name": "Satoshi.S",
      "speaker_url": "https://twitter.com/studio3104",
      "speaker_icon": "http://pbs.twimg.com/profile_images/520265668403294211/JxYDX9-P_normal.jpeg",
      "hatena": 6,
      "twitter": 27,
      "total": 65,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/e466d60a-11db-11e5-b07b-d7f07d574c3a",
      "title": "Posture for Engineers",
      "speaker_name": "Marylou Lenhart",
      "speaker_url": "https://github.com/melancholyfleur",
      "speaker_icon": "https://avatars.githubusercontent.com/u/38176?v=3",
      "hatena": 7,
      "twitter": 25,
      "total": 65,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/53507dd6-1101-11e5-b6f3-d7f07d574c3a",
      "title": "あらゆる単語や文字列を正しく認識するための技術とデータについて",
      "speaker_name": "Toshinori Sato",
      "speaker_url": "https://github.com/overlast",
      "speaker_icon": "https://avatars.githubusercontent.com/u/335646?v=3",
      "hatena": 10,
      "twitter": 19,
      "total": 63,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/2934a672-134e-11e5-9ef4-d9f87d574c3a",
      "title": "PerlとUnityで作るグローバルなソーシャルゲームの作り方",
      "speaker_name": "shogo82148",
      "speaker_url": "https://github.com/shogo82148",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1157344?v=3",
      "hatena": 10,
      "twitter": 19,
      "total": 63,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/7e6296c4-f95c-11e4-b00c-8ab37d574c3a",
      "title": "The Art of Method Dispatch (of Ruby)",
      "speaker_name": "Koichi Sasada",
      "speaker_url": "https://github.com/ko1",
      "speaker_icon": "https://avatars.githubusercontent.com/u/9558?v=3",
      "hatena": 10,
      "twitter": 18,
      "total": 61,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/fbb5d464-1000-11e5-8165-d7f07d574c3a",
      "title": "歴史あるwebサービスに携わって２年半の間に起きた事やった事",
      "speaker_name": "Masataka Kono",
      "speaker_url": "https://www.facebook.com/840773865999476",
      "speaker_icon": "http://graph.facebook.com/840773865999476/picture",
      "hatena": 11,
      "twitter": 16,
      "total": 61,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/4a44467a-0c5e-11e5-86eb-67dc7d574c3a",
      "title": "グローバル社会を目指すシステム開発の裏側",
      "speaker_name": "YU",
      "speaker_url": "https://twitter.com/yu_loveperl",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000524225252/d0e315a0cb8d122aed39787db95cf0d4_normal.jpeg",
      "hatena": 6,
      "twitter": 23,
      "total": 58,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/4491bfc8-11d6-11e5-ac0f-d7f07d574c3a",
      "title": "僕がwebアプリケーションのコードを書く時に考えていること 〜完全版〜",
      "speaker_name": "ダメ人間",
      "speaker_url": "https://twitter.com/dameninngenn",
      "speaker_icon": "http://pbs.twimg.com/profile_images/2700412500/9d84ff30d1cb4fd7ceb67411046ccfbe_normal.jpeg",
      "hatena": 9,
      "twitter": 18,
      "total": 58,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/1be822d8-0f83-11e5-b022-43ec7d574c3a",
      "title": "今夜、インターネットの片隅で。 〜ウェブサービス開発ちょっといい話〜",
      "speaker_name": "鹿",
      "speaker_url": "https://twitter.com/shikakun",
      "speaker_icon": "http://pbs.twimg.com/profile_images/417686994882269184/b1gqecsG_normal.jpeg",
      "hatena": 11,
      "twitter": 13,
      "total": 55,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/9a9c08cc-0d1e-11e5-b03a-67dc7d574c3a",
      "title": "Webサービスを個人で作り、運営し続けるという修羅の道",
      "speaker_name": "かとりょー",
      "speaker_url": "https://twitter.com/katryo",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1207493251/___normal.jpg",
      "hatena": 10,
      "twitter": 14,
      "total": 54,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/5ea2630a-133d-11e5-8cbb-d9f87d574c3a",
      "title": "Docker３兄弟について",
      "speaker_name": "アルパカ大明神[▮▮▮▯▯▯▯▯▯▯]",
      "speaker_url": "https://twitter.com/toritori0318",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000078453409/b6bfcd56abe9253d9e41f2e14bdd038f_normal.jpeg",
      "hatena": 8,
      "twitter": 17,
      "total": 53,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/0f62694a-1354-11e5-8eb4-d9f87d574c3a",
      "title": "新入りエンジニアは見た！！！ トゥギャッターを支える技術（とエンジニアと編集部と@yositosi）",
      "speaker_name": "アオヤマ ミント",
      "speaker_url": "https://twitter.com/MintoAoyama",
      "speaker_icon": "http://pbs.twimg.com/profile_images/601767800172978176/Ax16wsjG_normal.jpg",
      "hatena": 8,
      "twitter": 16,
      "total": 52,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/bd04b86c-f9de-11e4-b996-8ab37d574c3a",
      "title": "Adventures in Refactoring",
      "speaker_name": "Ben Lavender",
      "speaker_url": "https://github.com/bhuga",
      "speaker_icon": "https://avatars.githubusercontent.com/u/12676?v=3",
      "hatena": 5,
      "twitter": 21,
      "total": 52,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/c68136f6-fd51-11e4-9e4f-bdc07d574c3a",
      "title": "新米グロースハッカーの挑戦 - サービスとチームの成長戦略・・・あるいはPerlで雑に稼ぐ人の裏話。",
      "speaker_name": "あずまさとし",
      "speaker_url": "https://twitter.com/ytnobody",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000466143858/93673f957eb413a7a34410d930afa5f7_normal.png",
      "hatena": 7,
      "twitter": 17,
      "total": 50,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/33e44cfe-132f-11e5-9b4c-d9f87d574c3a",
      "title": "「インドのシリコンバレー」バンガロールの IT コミュニティ事情",
      "speaker_name": "ctokoro",
      "speaker_url": "https://github.com/ctokoro",
      "speaker_icon": "https://avatars.githubusercontent.com/u/620884?v=3",
      "hatena": 8,
      "twitter": 14,
      "total": 48,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/268d730e-136c-11e5-ac8f-d9f87d574c3a",
      "title": "Perlでゼロから作るコンテナ",
      "speaker_name": "Miki Horiuchi Kabe",
      "speaker_url": "https://www.facebook.com/951266011604370",
      "speaker_icon": "http://graph.facebook.com/951266011604370/picture",
      "hatena": 9,
      "twitter": 12,
      "total": 48,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/a9d3d0ba-0d1c-11e5-bb9e-67dc7d574c3a",
      "title": "ドキュメントのこと考えてますか？〜より良いドキュメントを書くための第一歩",
      "speaker_name": "丸山 亮",
      "speaker_url": "https://twitter.com/h13i32maru",
      "speaker_icon": "http://pbs.twimg.com/profile_images/577452163099553792/XoOX_Ioa_normal.jpeg",
      "hatena": 9,
      "twitter": 11,
      "total": 46,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/1c7648fa-1344-11e5-8c7c-d9f87d574c3a",
      "title": "あるECサイトをクラウドに移転したときの話",
      "speaker_name": "Yuki Tanno",
      "speaker_url": "https://github.com/tantan3",
      "speaker_icon": "https://avatars.githubusercontent.com/u/5218578?v=3",
      "hatena": 6,
      "twitter": 16,
      "total": 46,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/cbf6ea5a-11f5-11e5-b9ea-d7f07d574c3a",
      "title": "エンジニアからプロダクトマネージャーに転身して分かった１０のこと",
      "speaker_name": "shinjukujohnny",
      "speaker_url": "https://twitter.com/shinjukujohnny",
      "speaker_icon": "http://pbs.twimg.com/profile_images/524693733069963265/nmA39bww_normal.jpeg",
      "hatena": 7,
      "twitter": 14,
      "total": 45,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/3a368550-1301-11e5-9668-d9f87d574c3a",
      "title": "WebプログラマのためのUNIX/Linuxプロセス再入門",
      "speaker_name": "二丁",
      "speaker_url": "https://twitter.com/meru_akimbo",
      "speaker_icon": "http://pbs.twimg.com/profile_images/600986653721632768/zhiLWZVe_normal.png",
      "hatena": 7,
      "twitter": 14,
      "total": 45,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/93eaf068-faec-11e4-a8fd-8ab37d574c3a",
      "title": "NASA主催の世界最大級ハッカソンSpaceAppsを運営した話",
      "speaker_name": "湯村 翼 Tsubasa YUMURA",
      "speaker_url": "https://twitter.com/yumu19",
      "speaker_icon": "http://pbs.twimg.com/profile_images/599153322939916288/tRI3N4Eh_normal.jpg",
      "hatena": 5,
      "twitter": 17,
      "total": 45,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/f887eb70-f7e5-11e4-9737-8ab37d574c3a",
      "title": "エンジニアが知っておきたい2要素認証の現在と未来 : ワンタイムパスワード & FIDO U2F",
      "speaker_name": "Ryo Ito",
      "speaker_url": "https://github.com/ritou",
      "speaker_icon": "https://avatars.githubusercontent.com/u/97260?v=3",
      "hatena": 5,
      "twitter": 16,
      "total": 43,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/eb00b7a8-091e-11e5-8224-67dc7d574c3a",
      "title": "数え上げおねえさんを救え",
      "speaker_name": "YuZakuro",
      "speaker_url": "https://twitter.com/zakuro9715",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000492702362/5fb33d726ed17f142e3198cb0c980769_normal.png",
      "hatena": 7,
      "twitter": 13,
      "total": 43,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/71d63de6-0e4e-11e5-954d-67dc7d574c3a",
      "title": "PerlとGoを共存させたい - Lobiの場合 -",
      "speaker_name": "NAGATA Hiroaki",
      "speaker_url": "https://github.com/handlename",
      "speaker_icon": "https://avatars.githubusercontent.com/u/115636?v=3",
      "hatena": 8,
      "twitter": 11,
      "total": 43,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/0b669ad8-f616-11e4-90fb-8ab37d574c3a",
      "title": "オープンソースエンジニアのための Windows入門",
      "speaker_name": "tsubasa",
      "speaker_url": "https://twitter.com/tsubasaxZZZ",
      "speaker_icon": "http://pbs.twimg.com/profile_images/560137093/2286227_3079062002_normal.jpg",
      "hatena": 7,
      "twitter": 11,
      "total": 40,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/94d4e442-0f56-11e5-9049-43ec7d574c3a",
      "title": "'エンジニア１人＆小規模な環境'から'複数人同時開発＆中規模な環境'を実現するまでにやったこと",
      "speaker_name": "Daisuke Tamada",
      "speaker_url": "https://www.facebook.com/1262246947",
      "speaker_icon": "http://graph.facebook.com/1262246947/picture",
      "hatena": 5,
      "twitter": 14,
      "total": 39,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/81342dae-1351-11e5-ab94-d9f87d574c3a",
      "title": "カンファレンスネットワークの作り方",
      "speaker_name": "CONBU",
      "speaker_url": "https://twitter.com/conbu_net",
      "speaker_icon": "http://pbs.twimg.com/profile_images/476568469920415744/wdOm99Aa_normal.png",
      "hatena": 9,
      "twitter": 6,
      "total": 37,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/f283a924-fddc-11e4-90cd-bdc07d574c3a",
      "title": "DeepLearning の前に知っておくことがある！ 再帰型のニューラルネットワークや自己組織化マップについて語ろう",
      "speaker_name": "muddydixon",
      "speaker_url": "https://github.com/muddydixon",
      "speaker_icon": "https://avatars.githubusercontent.com/u/10035?v=3",
      "hatena": 8,
      "twitter": 8,
      "total": 37,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/28878b9c-1306-11e5-b12f-d9f87d574c3a",
      "title": "Perl6 は実用的か",
      "speaker_name": "Tokuhiro Matsuno",
      "speaker_url": "https://github.com/tokuhirom",
      "speaker_icon": "https://avatars.githubusercontent.com/u/21084?v=3",
      "hatena": 7,
      "twitter": 9,
      "total": 36,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/96a8932c-f62e-11e4-8734-8ab37d574c3a",
      "title": "Connector/C APIから見るMySQL Fabricの動作とDBD::mysqlへの道",
      "speaker_name": "yoku0825",
      "speaker_url": "https://twitter.com/yoku0825",
      "speaker_icon": "http://pbs.twimg.com/profile_images/3445683412/bdbf36104036584029165edc231d6bc3_normal.jpeg",
      "hatena": 7,
      "twitter": 8,
      "total": 35,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/28f713a4-fbeb-11e4-9fa6-8ab37d574c3a",
      "title": "OS X アプリケーション 開発普及活動",
      "speaker_name": "Daichi Nakajima",
      "speaker_url": "https://github.com/nakajijapan",
      "speaker_icon": "https://avatars.githubusercontent.com/u/193569?v=3",
      "hatena": 4,
      "twitter": 12,
      "total": 33,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/992a85e2-f912-11e4-938b-8ab37d574c3a",
      "title": "A Brief History of Perl",
      "speaker_name": "Dan Kogai",
      "speaker_url": "https://twitter.com/dankogai",
      "speaker_icon": "http://pbs.twimg.com/profile_images/419164963416985600/QtvOEPl5_normal.jpeg",
      "hatena": 6,
      "twitter": 8,
      "total": 32,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/4c11a14a-09df-11e5-ad5e-67dc7d574c3a",
      "title": "いけてない開発環境をDockerでいい感じにした話",
      "speaker_name": "ごちょー",
      "speaker_url": "https://twitter.com/gotyoooo",
      "speaker_icon": "http://pbs.twimg.com/profile_images/515320126002831360/cdHgAcRM_normal.jpeg",
      "hatena": 5,
      "twitter": 10,
      "total": 32,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/280c1b4e-fad6-11e4-9fca-8ab37d574c3a",
      "title": "自社サービスで生き残るスタートアップのためのモダンな言語選定とインフラ・アーキテクチャの最適化",
      "speaker_name": "srockstyle",
      "speaker_url": "https://twitter.com/srockstyle",
      "speaker_icon": "http://pbs.twimg.com/profile_images/530258290991583232/TaRx528t_normal.jpeg",
      "hatena": 4,
      "twitter": 11,
      "total": 31,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/d8e842be-1366-11e5-b262-d9f87d574c3a",
      "title": "mod_perlプログラマーがYAPCで語るレガシー開発論",
      "speaker_name": "OGATA Tetsuji",
      "speaker_url": "https://twitter.com/xtetsuji",
      "speaker_icon": "http://pbs.twimg.com/profile_images/404805662/min_x40_mini_normal.png",
      "hatena": 4,
      "twitter": 11,
      "total": 31,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/b03162be-0052-11e5-ba92-89c77d574c3a",
      "title": "Run containerized workloads with Lattice",
      "speaker_name": "Etourneau Gwenn",
      "speaker_url": "https://github.com/shinji62",
      "speaker_icon": "https://avatars.githubusercontent.com/u/4757816?v=3",
      "hatena": 3,
      "twitter": 13,
      "total": 31,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/39d5cf28-1273-11e5-8540-d9f87d574c3a",
      "title": "バッチジョブを手軽に冗長化するツール \"Koyomi\" のご紹介",
      "speaker_name": "きいあむ / YASUTAKE K.",
      "speaker_url": "https://twitter.com/key_amb",
      "speaker_icon": "http://pbs.twimg.com/profile_images/604586076024340480/EIbpIzsF_normal.jpg",
      "hatena": 6,
      "twitter": 7,
      "total": 30,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/9a3fdc26-136a-11e5-9b96-d9f87d574c3a",
      "title": "Great, you now have a data analysis platform. Now what?",
      "speaker_name": "Takumi Sakamoto",
      "speaker_url": "https://twitter.com/takus",
      "speaker_icon": "http://pbs.twimg.com/profile_images/695932190/me_normal.jpg",
      "hatena": 5,
      "twitter": 9,
      "total": 30,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/885d66a2-f607-11e4-b5a3-8ab37d574c3a",
      "title": "Prestoが便利すぎて使わない理由が見当たらない 〜MySQLとPostgreSQLが恋をした〜",
      "speaker_name": "にいやん",
      "speaker_url": "https://twitter.com/nii_yan",
      "speaker_icon": "http://pbs.twimg.com/profile_images/701274503/515145_584452466_normal.jpg",
      "hatena": 5,
      "twitter": 8,
      "total": 29,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/e4791a94-f7ec-11e4-8787-8ab37d574c3a",
      "title": "PAUSE, with a little bit of Plack",
      "speaker_name": "Kenichi Ishigaki",
      "speaker_url": "https://github.com/charsbar",
      "speaker_icon": "https://avatars.githubusercontent.com/u/36517?v=3",
      "hatena": 7,
      "twitter": 5,
      "total": 29,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/109c01fa-0e58-11e5-b553-67dc7d574c3a",
      "title": "dockerでローカル環境を構築",
      "speaker_name": "goodnext",
      "speaker_url": "https://twitter.com/runners_high777",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1790006063/IMG_0575_normal.JPG",
      "hatena": 3,
      "twitter": 11,
      "total": 28,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/315b6296-134e-11e5-a45c-d9f87d574c3a",
      "title": "WebRTCを活用したサービスを開発する上で知っておくべきこと",
      "speaker_name": "Yusuke Naka",
      "speaker_url": "https://twitter.com/Tukimikage",
      "speaker_icon": "http://pbs.twimg.com/profile_images/479957377496539136/FLk2OZJN_normal.jpeg",
      "hatena": 1,
      "twitter": 14,
      "total": 27,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/e8e1c67a-003f-11e5-8fd5-89c77d574c3a",
      "title": "RFC化されたJSON Web Token(JWT)の仕様とユースケースを紹介します",
      "speaker_name": "Ryo Ito",
      "speaker_url": "https://github.com/ritou",
      "speaker_icon": "https://avatars.githubusercontent.com/u/97260?v=3",
      "hatena": 3,
      "twitter": 10,
      "total": 26,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/daf93c2a-0849-11e5-b626-79c97d574c3a",
      "title": "成長期を迎えた企業のエンジニアリングを考える",
      "speaker_name": "onigra",
      "speaker_url": "https://twitter.com/onigra_",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000057979446/39eb8dbe5c61459b6bc1377f54587c52_normal.jpeg",
      "hatena": 4,
      "twitter": 8,
      "total": 26,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/806bdc36-0e25-11e5-9f3c-67dc7d574c3a",
      "title": "Sharding a database",
      "speaker_name": "Abi Gail",
      "speaker_url": "https://www.facebook.com/832303553518697",
      "speaker_icon": "http://graph.facebook.com/832303553518697/picture",
      "hatena": 5,
      "twitter": 6,
      "total": 25,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/c83c4fae-133f-11e5-9efa-d9f87d574c3a",
      "title": "オフショア？それともニアショア？",
      "speaker_name": "mototoki.n",
      "speaker_url": "https://twitter.com/mototokin",
      "speaker_icon": "http://pbs.twimg.com/profile_images/607137825025200128/PMAaHsVi_normal.jpg",
      "hatena": 2,
      "twitter": 11,
      "total": 25,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/94359334-0b59-11e5-995a-67dc7d574c3a",
      "title": "freeeの成長と共に成長する開発スタイル",
      "speaker_name": "Keiji Matsuzaki",
      "speaker_url": "https://github.com/futoase",
      "speaker_icon": "https://avatars.githubusercontent.com/u/72997?v=3",
      "hatena": 3,
      "twitter": 9,
      "total": 24,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/b79672e2-1123-11e5-8f56-d7f07d574c3a",
      "title": "JS書いた事ない人が自社サービスにBackbone.jsを導入する事になって四苦八苦した話",
      "speaker_name": "さい",
      "speaker_url": "https://twitter.com/sairoutine",
      "speaker_icon": "http://pbs.twimg.com/profile_images/582195994219003904/sMFyQ7aB_normal.jpg",
      "hatena": 3,
      "twitter": 9,
      "total": 24,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/7db44b58-12a4-11e5-bcba-d9f87d574c3a",
      "title": "ブラウザの世界を覗いてみよう",
      "speaker_name": "kiyoshi nomo",
      "speaker_url": "https://twitter.com/kysnm",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1317946234/39253694_origin_normal.jpg",
      "hatena": 4,
      "twitter": 7,
      "total": 24,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/1ddceae2-133e-11e5-9831-d9f87d574c3a",
      "title": "非構造化データとの戦い〜バウンスメールを解析する第三のシステム",
      "speaker_name": "ネコ半径³",
      "speaker_url": "https://twitter.com/azumakuniyuki",
      "speaker_icon": "http://pbs.twimg.com/profile_images/598733415664353280/VyrR3m4F_normal.jpg",
      "hatena": 3,
      "twitter": 8,
      "total": 23,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/b355fa20-122e-11e5-8ba5-d9f87d574c3a",
      "title": "言語開発の現場",
      "speaker_name": "SHIBATA Hiroshi",
      "speaker_url": "https://github.com/hsbt",
      "speaker_icon": "https://avatars.githubusercontent.com/u/12301?v=3",
      "hatena": 5,
      "twitter": 5,
      "total": 23,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/265227c6-10b6-11e5-a819-d7f07d574c3a",
      "title": "サービスの成長にあわせて Web Application のテストやリファクタリングを試行錯誤した話",
      "speaker_name": "zoncoen",
      "speaker_url": "https://twitter.com/zoncoen",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000598480259/bc52c5f2664337347be1b293fe2cc5ec_normal.png",
      "hatena": 4,
      "twitter": 6,
      "total": 22,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/e19fe827-13c1-11e5-aca1-525412004261",
      "title": "Managing Containers at Scale with CoreOS and Kubernetes",
      "speaker_name": "Kelsey Hightower",
      "speaker_url": "https://github.com/kelseyhightower",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1123322?v=3",
      "hatena": 2,
      "twitter": 9,
      "total": 21,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/d079a84c-09d5-11e5-8169-67dc7d574c3a",
      "title": "ノリで行動していたらいつのまにかPerlで月間4.5億PVのサービスを運営することになった話",
      "speaker_name": "ACE",
      "speaker_url": "https://twitter.com/ace_project",
      "speaker_icon": "http://pbs.twimg.com/profile_images/2667510035/8ca5bd4e8a5851b152befe8ab9f7b6e8_normal.png",
      "hatena": 3,
      "twitter": 6,
      "total": 19,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/acf32b5e-135e-11e5-963f-d9f87d574c3a",
      "title": "ソシャゲ開発でスクラムを導入しようとした、どっかのプレイングマネージャーのお話",
      "speaker_name": "syunsuke",
      "speaker_url": "https://twitter.com/i47_rozary",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1707414486/21_-_1_normal.jpg",
      "hatena": 3,
      "twitter": 6,
      "total": 19,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/b5481c1c-1320-11e5-b3a3-d9f87d574c3a",
      "title": "RedPen: open source document checker, supporting markup languages such as Markdown and Textile",
      "speaker_name": "Takahiko Ito",
      "speaker_url": "https://twitter.com/takahi_i",
      "speaker_icon": "http://pbs.twimg.com/profile_images/487495613366292480/Y0sZh8sO_normal.jpeg",
      "hatena": 2,
      "twitter": 7,
      "total": 18,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/5ceebdcc-136c-11e5-a014-d9f87d574c3a",
      "title": "サンタクロースを支えるIT技術",
      "speaker_name": "Masayuki Ishikawa",
      "speaker_url": "https://www.facebook.com/100001054610433",
      "speaker_icon": "http://graph.facebook.com/100001054610433/picture",
      "hatena": 2,
      "twitter": 7,
      "total": 18,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/ad57ca84-13e9-11e5-aca1-525412004261",
      "title": "【特別企画】YAPCあるある（仮）",
      "speaker_name": "鎌田武俊",
      "speaker_url": "https://www.facebook.com/1261488582",
      "speaker_icon": "http://graph.facebook.com/1261488582/picture",
      "hatena": 2,
      "twitter": 7,
      "total": 18,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/7d7cb9a2-12d8-11e5-9e81-d9f87d574c3a",
      "title": "レガシーな開発体制・開発環境改善のために取り組んできたこと",
      "speaker_name": "YS",
      "speaker_url": "https://twitter.com/yosukep",
      "speaker_icon": "http://pbs.twimg.com/profile_images/521480305421471744/DLC7h26z_normal.png",
      "hatena": 3,
      "twitter": 4,
      "total": 16,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/e5f171e4-133c-11e5-b836-d9f87d574c3a",
      "title": "マチピーFM in YAPC::Asia",
      "speaker_name": "あずまさとし",
      "speaker_url": "https://twitter.com/ytnobody",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000466143858/93673f957eb413a7a34410d930afa5f7_normal.png",
      "hatena": 1,
      "twitter": 7,
      "total": 15,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/414731b6-fedc-11e4-ad1d-66c47d574c3a",
      "title": "Deploying Perl Web Applications with Docker",
      "speaker_name": "Zak B. Elep",
      "speaker_url": "https://github.com/zakame",
      "speaker_icon": "https://avatars.githubusercontent.com/u/110625?v=3",
      "hatena": 2,
      "twitter": 4,
      "total": 13,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/b99c43b6-0ffa-11e5-8c90-d7f07d574c3a",
      "title": "Writing html is stupid",
      "speaker_name": "Actualeyes",
      "speaker_url": "https://twitter.com/actualeyes",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1854685804/IMAG0064__1__normal.jpg",
      "hatena": 1,
      "twitter": 6,
      "total": 13,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/d09049ce-1369-11e5-a8b5-d9f87d574c3a",
      "title": "急かつ頻繁な仕様変更に耐えられるシステムの設計方法",
      "speaker_name": "zuqqhi2",
      "speaker_url": "https://twitter.com/zuqqhi2",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1394079624/26852578_1874744136_normal.jpg",
      "hatena": 2,
      "twitter": 4,
      "total": 13,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/a86f10a6-136e-11e5-8ced-d9f87d574c3a",
      "title": "20年後も食えるPerlエンジニア",
      "speaker_name": "Yusuke Kawasaki",
      "speaker_url": "https://www.facebook.com/731850967",
      "speaker_icon": "http://graph.facebook.com/731850967/picture",
      "hatena": 4,
      "twitter": 1,
      "total": 13,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/1cf18e70-1100-11e5-a394-d7f07d574c3a",
      "title": "Introduction to Sereal and its tooling",
      "speaker_name": "Ivan Kruglov",
      "speaker_url": "https://github.com/ikruglov",
      "speaker_icon": "https://avatars.githubusercontent.com/u/4630547?v=3",
      "hatena": 3,
      "twitter": 2,
      "total": 12,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/5d081e66-fedb-11e4-956f-66c47d574c3a",
      "title": "Hashids: Porting from Javascript/PHP to Perl",
      "speaker_name": "Zak B. Elep",
      "speaker_url": "https://github.com/zakame",
      "speaker_icon": "https://avatars.githubusercontent.com/u/110625?v=3",
      "hatena": 1,
      "twitter": 5,
      "total": 11,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/f9d63700-0d22-11e5-ae59-67dc7d574c3a",
      "title": "保存時 lint はなぜ役に立つか、Perl でその検査範囲を広げるには",
      "speaker_name": "hkoba",
      "speaker_url": "https://twitter.com/hkoba",
      "speaker_icon": "http://pbs.twimg.com/profile_images/25436812/myfist_normal.jpg",
      "hatena": 2,
      "twitter": 3,
      "total": 11,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/3d46659a-136e-11e5-b36d-d9f87d574c3a",
      "title": "ベンチャーのexit戦略と技術選択: PerlからPython、そしてGo/Dockerへ",
      "speaker_name": "tnir",
      "speaker_url": "https://github.com/tnir",
      "speaker_icon": "https://avatars.githubusercontent.com/u/10229505?v=3",
      "hatena": 1,
      "twitter": 4,
      "total": 10,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/c9546112-1347-11e5-ad02-d9f87d574c3a",
      "title": "10年動き続けているブログサービスのエンドツーエンドを書いた記録",
      "speaker_name": "Kenichi TAKAHASHI",
      "speaker_url": "https://github.com/kenchan",
      "speaker_icon": "https://avatars.githubusercontent.com/u/6875?v=3",
      "hatena": 2,
      "twitter": 2,
      "total": 9,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/acecc4ba-1356-11e5-a296-d9f87d574c3a",
      "title": "私が行ってきたIT勉強会やカンファレンス",
      "speaker_name": "ガーデン",
      "speaker_url": "https://twitter.com/glkame",
      "speaker_icon": "http://pbs.twimg.com/profile_images/505371986139160576/jXTLTlds_normal.jpeg",
      "hatena": 2,
      "twitter": 2,
      "total": 9,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/aa4ea77e-136e-11e5-a199-d9f87d574c3a",
      "title": "PerlからGoogle Analytics APIを使ってカジュアルにグロースハック",
      "speaker_name": "hirobanex",
      "speaker_url": "https://twitter.com/hirobanex",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1098249211/niku_normal.jpg",
      "hatena": 2,
      "twitter": 2,
      "total": 9,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/e14c5ae0-12f7-11e5-a909-d9f87d574c3a",
      "title": "【sponsored contents】若手エンジニア達の生存戦略",
      "speaker_name": "みそ ｼﾞﾝｼﾞﾆｱ",
      "speaker_url": "https://twitter.com/crazygirl_lover",
      "speaker_icon": "http://pbs.twimg.com/profile_images/599568269507342336/jb_Rk7sX_normal.jpg",
      "hatena": 2,
      "twitter": 2,
      "total": 9,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/c77d5164-1301-11e5-910c-d9f87d574c3a",
      "title": "CDPはもう古い？これからはMCDP",
      "speaker_name": "Masashi Terui",
      "speaker_url": "https://github.com/marcy-terui",
      "speaker_icon": "https://avatars.githubusercontent.com/u/4560264?v=3",
      "hatena": 1,
      "twitter": 3,
      "total": 8,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/32b918ee-1304-11e5-94b1-d9f87d574c3a",
      "title": "print \"Hello, Real-World\\n\"; # Real-Worldに差し込み始めるWeb技術の展望",
      "speaker_name": "Lyo Kato",
      "speaker_url": "https://github.com/lyokato",
      "speaker_icon": "https://avatars.githubusercontent.com/u/30877?v=3",
      "hatena": 0,
      "twitter": 5,
      "total": 8,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/8eae34ac-136a-11e5-bf05-d9f87d574c3a",
      "title": "WEBサービスプログラマーが０から考えたネイティブアプリのセキュアなAPI設計について",
      "speaker_name": "gomadango",
      "speaker_url": "https://github.com/gomadango",
      "speaker_icon": "https://avatars.githubusercontent.com/u/12896099?v=3",
      "hatena": 1,
      "twitter": 3,
      "total": 8,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/a90c7002-0f6e-11e5-bd79-43ec7d574c3a",
      "title": "ビットバレー時代から転職6回、10社を経験したPerlエンジニアのキャリアの話",
      "speaker_name": "Futoshi Koresawa",
      "speaker_url": "https://www.facebook.com/1131016653",
      "speaker_icon": "http://graph.facebook.com/1131016653/picture",
      "hatena": 0,
      "twitter": 4,
      "total": 7,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/6849b338-1061-11e5-ad11-d7f07d574c3a",
      "title": "新米エンジニアの葛藤 -レガシーと和解、そしてモダンへ-",
      "speaker_name": "Tadayuki Onishi",
      "speaker_url": "https://www.facebook.com/827451210665191",
      "speaker_icon": "http://graph.facebook.com/827451210665191/picture",
      "hatena": 0,
      "twitter": 4,
      "total": 7,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/49e53cbe-11e2-11e5-ac4c-d7f07d574c3a",
      "title": "SWエンジニアとして生き残るために⑤： 統計解析/機械学習の最短基礎理解",
      "speaker_name": "Ryuji_Tak",
      "speaker_url": "https://twitter.com/kozyupapa",
      "speaker_icon": "http://pbs.twimg.com/profile_images/433156968576843776/f8PDnsa-_normal.png",
      "hatena": 1,
      "twitter": 2,
      "total": 6,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/cbe92afe-12a5-11e5-8fc1-d9f87d574c3a",
      "title": "Agent たちをサポートせよ！ YAPC-Driven Development",
      "speaker_name": "Takatsugu Shigeta",
      "speaker_url": "https://github.com/comewalk",
      "speaker_icon": "https://avatars.githubusercontent.com/u/2808?v=3",
      "hatena": 1,
      "twitter": 2,
      "total": 6,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/5d5ef048-136b-11e5-b1b7-d9f87d574c3a",
      "title": "Perlコア文書翻訳を支える技術と手法",
      "speaker_name": "SHIRAKATA Kentaro",
      "speaker_url": "https://github.com/argrath",
      "speaker_icon": "https://avatars.githubusercontent.com/u/53912?v=3",
      "hatena": 1,
      "twitter": 2,
      "total": 6,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/a4e034cc-1366-11e5-b199-d9f87d574c3a",
      "title": "AWS と WordPress でお手軽キュレーションサービス",
      "speaker_name": "sojiro",
      "speaker_url": "https://twitter.com/sojiro14",
      "speaker_icon": "http://pbs.twimg.com/profile_images/595286077985804288/mIsprLuz_normal.jpg",
      "hatena": 0,
      "twitter": 3,
      "total": 5,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/322e11bc-0d3d-11e5-ac8b-67dc7d574c3a",
      "title": "Learn about your Web applications and Perl installation with HTML::Perlinfo",
      "speaker_name": "Mike Accardo",
      "speaker_url": "https://github.com/mixedconnections",
      "speaker_icon": "https://avatars.githubusercontent.com/u/833824?v=3",
      "hatena": 1,
      "twitter": 1,
      "total": 4,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/f561dd26-1369-11e5-a050-d9f87d574c3a",
      "title": "あなたはいくつ知っている？MySQL の tips 20連発！！",
      "speaker_name": "sojiro",
      "speaker_url": "https://twitter.com/sojiro14",
      "speaker_icon": "http://pbs.twimg.com/profile_images/595286077985804288/mIsprLuz_normal.jpg",
      "hatena": 1,
      "twitter": 1,
      "total": 4,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/b4740140-0031-11e5-b311-89c77d574c3a",
      "title": "やりたいことがあれば起業も視野に入れよう！",
      "speaker_name": "Hiroyuki Maruyama",
      "speaker_url": "https://www.facebook.com/100002578287431",
      "speaker_icon": "http://graph.facebook.com/100002578287431/picture",
      "hatena": 0,
      "twitter": 2,
      "total": 3,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/235d24a4-0a34-11e5-8a3a-67dc7d574c3a",
      "title": "My journey to Information Retrieval",
      "speaker_name": "Kang-min Liu",
      "speaker_url": "https://github.com/gugod",
      "speaker_icon": "https://avatars.githubusercontent.com/u/4970?v=3",
      "hatena": 0,
      "twitter": 2,
      "total": 3,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/7cdd9012-0fad-11e5-8dfb-43ec7d574c3a",
      "title": "Normal Form Grapheme",
      "speaker_name": "Jonathan Worthington",
      "speaker_url": "https://github.com/jnthn",
      "speaker_icon": "https://avatars.githubusercontent.com/u/50259?v=3",
      "hatena": 0,
      "twitter": 1,
      "total": 1,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/3a36ed2e-109f-11e5-9d18-d7f07d574c3a",
      "title": "配属三ヶ月の新人がIoTの波に流された日々",
      "speaker_name": "kuroei",
      "speaker_url": "https://github.com/kuroei",
      "speaker_icon": "https://avatars.githubusercontent.com/u/3031424?v=3",
      "hatena": 0,
      "twitter": 1,
      "total": 1,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/f9b77d4a-1102-11e5-a406-d7f07d574c3a",
      "title": "分割又里山",
      "speaker_name": "Tom Rathborne",
      "speaker_url": "https://github.com/trathborne",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1091889?v=3",
      "hatena": 0,
      "twitter": 1,
      "total": 1,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/61b09c00-11d6-11e5-8e29-d7f07d574c3a",
      "title": "Packaging Perl applications with fpm",
      "speaker_name": "Allan Espinosa",
      "speaker_url": "https://twitter.com/AllanEspinosa",
      "speaker_icon": "http://pbs.twimg.com/profile_images/55653618/2547153343_5dff0945de_normal.jpg",
      "hatena": 0,
      "twitter": 1,
      "total": 1,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/1effc02c-136e-11e5-8887-d9f87d574c3a",
      "title": "1からJavaで書きなおしたPerlアプリの四方山話",
      "speaker_name": "Yuichi Suzuki",
      "speaker_url": "https://www.facebook.com/927473347309272",
      "speaker_icon": "http://graph.facebook.com/927473347309272/picture",
      "hatena": 0,
      "twitter": 1,
      "total": 1,
      "accepted": false
    },
    {
      "path": "/2015/talk/show/6964fd88-f5e8-11e4-b323-49b37d574c3a",
      "title": "クロージング 🎉",
      "speaker_name": "Daisuke Maki",
      "speaker_url": "https://twitter.com/lestrrat",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1223562029/DSC00001_normal.JPG",
      "hatena": 0,
      "twitter": 1,
      "total": 1,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/22f59fb8-0fad-11e5-98ef-43ec7d574c3a",
      "title": "Parallelism, Concurrency, and Asynchrony in Perl 6",
      "speaker_name": "Jonathan Worthington",
      "speaker_url": "https://github.com/jnthn",
      "speaker_icon": "https://avatars.githubusercontent.com/u/50259?v=3",
      "hatena": 0,
      "twitter": 1,
      "total": 1,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/1ffa6f7a-f5e8-11e4-a4ec-49b37d574c3a",
      "title": "Opening",
      "speaker_name": "Daisuke Maki",
      "speaker_url": "https://twitter.com/lestrrat",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1223562029/DSC00001_normal.JPG",
      "hatena": 0,
      "twitter": 1,
      "total": 1,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/69caedbd-1872-11e5-aca1-525412004261",
      "title": "Lightning Talks Day 2",
      "speaker_name": "Daisuke Maki",
      "speaker_url": "https://twitter.com/lestrrat",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1223562029/DSC00001_normal.JPG",
      "hatena": 0,
      "twitter": 0,
      "total": 0,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/6bde6c69-187a-11e5-aca1-525412004261",
      "title": "TBD",
      "speaker_name": "Brad Fitzpatrick",
      "speaker_url": "https://twitter.com/bradfitz",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1376628217/brad_normal.jpg",
      "hatena": 0,
      "twitter": 0,
      "total": 0,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/ae1cce86-1874-11e5-aca1-525412004261",
      "title": "懇親会",
      "speaker_name": "Daisuke Maki",
      "speaker_url": "https://twitter.com/lestrrat",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1223562029/DSC00001_normal.JPG",
      "hatena": 0,
      "twitter": 0,
      "total": 0,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/22957e9c-1872-11e5-aca1-525412004261",
      "title": "Lightning Talks Day 1",
      "speaker_name": "Daisuke Maki",
      "speaker_url": "https://twitter.com/lestrrat",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1223562029/DSC00001_normal.JPG",
      "hatena": 0,
      "twitter": 0,
      "total": 0,
      "accepted": true
    },
    {
      "path": "/2015/talk/show/cc0ec485-1879-11e5-aca1-525412004261",
      "title": "TBD",
      "speaker_name": "Yukihiro \"Matz\" Matsumoto",
      "speaker_url": "https://github.com/matz",
      "speaker_icon": "https://avatars.githubusercontent.com/u/30733?v=3",
      "hatena": 0,
      "twitter": 0,
      "total": 0,
      "accepted": true
    }
  ]
}

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _htmlspecialchars = require('htmlspecialchars');

var _htmlspecialchars2 = _interopRequireDefault(_htmlspecialchars);

var _rankingJson = require('./ranking.json');

$(function () {

  var YAPC_URL = 'http://yapcasia.org';

  var table = $('#ranking');
  var tbody = table.find('tbody');

  _rankingJson.ranking.forEach(function (talk, i) {
    var tr = document.createElement('tr');
    var url = YAPC_URL + talk.path;
    var acceptedClass = talk.accepted ? 'accepted' : '';
    tr.innerHTML = html(_taggedTemplateLiteral(['\n<td>', '</td>\n<td><span class="accept ', '">採用</span> <a href="', '">', '</a></td>\n<td><a href="', '"><img class="speaker-icon" src="', '">', '</a></td>\n<td><a href="https://twitter.com/search?q=', '" class="social-count">', '</a></td>\n<td><a href="http://b.hatena.ne.jp/entry/yapcasia.org', '" class="social-count">', '</a></td>\n<td>', '</td>'], ['\n<td>', '</td>\n<td><span class="accept ', '">採用</span> <a href="', '">', '</a></td>\n<td><a href="', '"><img class="speaker-icon" src="', '">', '</a></td>\n<td><a href="https://twitter.com/search?q=', '" class="social-count">', '</a></td>\n<td><a href="http://b.hatena.ne.jp/entry/yapcasia.org', '" class="social-count">', '</a></td>\n<td>', '</td>']), i + 1, acceptedClass, url, talk.title, talk.speaker_url, talk.speaker_icon, talk.speaker_name, encodeURIComponent(url), talk.twitter, talk.path, talk.hatena, talk.total).replace(/\n/g, '');
    tbody.append(tr);
  });

  table.tablesort();
  table.find('.sort-number').data('sortBy', function (th, td) {
    return Number(td.text());
  }).off('click.tablesort').on('click.tablesort', function () {
    table.data('tablesort').sort($(this), 'desc');
  });
  // rank
  table.find('.sort-disabled').off('click.tablesort');
  table.on('tablesort:complete', function (e) {
    tbody.find('tr td:first-child').each(function (i, td) {
      td.textContent = i + 1;
    });
  });
  // default
  table.data('tablesort').sort(table.find('th:last-child'), 'desc');

  function html(templates) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    // templates: ["<p>Hello, ", "${name}</p>"]
    // values: ["Bob <script>"]
    var result = '';
    for (var i = 0; i < templates.length; i++) {
      result += templates[i];
      if (i < values.length) {
        result += (0, _htmlspecialchars2['default'])(values[i]);
      }
    }
    return result;
  }
});

},{"./ranking.json":2,"htmlspecialchars":1}]},{},[3]);
