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
  "date": 1434942017585,
  "ranking": [
    {
      "path": "/2015/talk/show/de9e7a1e-136d-11e5-a9fc-d9f87d574c3a",
      "title": "Perlの上にも三年 〜 ずっとイケてるサービスを作り続ける技術 〜",
      "speaker_name": "趣味はマリンスポーツです",
      "speaker_url": "https://twitter.com/hitode909",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1753788808/sushi_r_normal.gif",
      "hatena": 145,
      "twitter": 164,
      "total": 1406
    },
    {
      "path": "/2015/talk/show/c191c08a-0a98-11e5-be34-67dc7d574c3a",
      "title": "esa.io - 趣味から育てたWebサービスで生きていく",
      "speaker_name": "Atsuo Fukaya",
      "speaker_url": "https://github.com/fukayatsu",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1041857?v=3",
      "hatena": 110,
      "twitter": 171,
      "total": 1232
    },
    {
      "path": "/2015/talk/show/9ec2791c-05e5-11e5-81fa-79c97d574c3a",
      "title": "世界展開する大規模ウェブサービスのデプロイを支える技術",
      "speaker_name": "aereal",
      "speaker_url": "https://github.com/aereal",
      "speaker_icon": "https://avatars.githubusercontent.com/u/87649?v=3",
      "hatena": 107,
      "twitter": 141,
      "total": 1108
    },
    {
      "path": "/2015/talk/show/f2816038-10ec-11e5-89bf-d7f07d574c3a",
      "title": "我々はどのように冗長化を失敗したのか",
      "speaker_name": "Kenji Naito",
      "speaker_url": "https://github.com/kenjiskywalker",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1315074?v=3",
      "hatena": 69,
      "twitter": 124,
      "total": 832
    },
    {
      "path": "/2015/talk/show/86ebd212-fab3-11e4-8f5a-8ab37d574c3a",
      "title": "ISUCONの勝ち方",
      "speaker_name": "Masahiro Nagano",
      "speaker_url": "https://github.com/kazeburo",
      "speaker_icon": "https://avatars.githubusercontent.com/u/46764?v=3",
      "hatena": 64,
      "twitter": 124,
      "total": 803
    },
    {
      "path": "/2015/talk/show/c5ea5428-fac9-11e4-88c1-8ab37d574c3a",
      "title": "Google Cloud Platformの謎テクノロジーを掘り下げる",
      "speaker_name": "Kazunori Sato",
      "speaker_url": "https://github.com/kazunori279",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1623040?v=3",
      "hatena": 59,
      "twitter": 118,
      "total": 754
    },
    {
      "path": "/2015/talk/show/441c0b72-036f-11e5-851f-79c97d574c3a",
      "title": "技術顧問というお仕事",
      "speaker_name": "Naoya Ito",
      "speaker_url": "https://github.com/naoya",
      "speaker_icon": "https://avatars.githubusercontent.com/u/8991?v=3",
      "hatena": 77,
      "twitter": 69,
      "total": 682
    },
    {
      "path": "/2015/talk/show/b335dee0-09ad-11e5-8d7a-67dc7d574c3a",
      "title": "Consulと自作OSSを活用した100台規模のWebサービス運用",
      "speaker_name": "fujiwara",
      "speaker_url": "https://twitter.com/fujiwara",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1295745651/fujiwara-icon-s_normal.png",
      "hatena": 60,
      "twitter": 84,
      "total": 639
    },
    {
      "path": "/2015/talk/show/4bab2728-00fa-11e5-9931-79c97d574c3a",
      "title": "Web由来の組み込みエンジニアの半年間のすべて 〜WebとiOSとBLEとハードウェアデバイスのこと〜",
      "speaker_name": "Kazuhiro Homma",
      "speaker_url": "https://github.com/kazuph",
      "speaker_icon": "https://avatars.githubusercontent.com/u/849165?v=3",
      "hatena": 51,
      "twitter": 97,
      "total": 634
    },
    {
      "path": "/2015/talk/show/4f85e87a-f9ec-11e4-8262-8ab37d574c3a",
      "title": "3分でサービスのOSを入れ替える技術",
      "speaker_name": "SHIBATA Hiroshi",
      "speaker_url": "https://github.com/hsbt",
      "speaker_icon": "https://avatars.githubusercontent.com/u/12301?v=3",
      "hatena": 55,
      "twitter": 65,
      "total": 543
    },
    {
      "path": "/2015/talk/show/621948f2-0d46-11e5-a403-67dc7d574c3a",
      "title": "PHP帝国の逆襲！（を願うPHPerが話す最近のPHPについてのクイックツアー PHP7対応版）",
      "speaker_name": "うずら",
      "speaker_url": "https://twitter.com/uzulla",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000122330373/c9162e04e2a5fb779758cc4f0a13c2c0_normal.jpeg",
      "hatena": 45,
      "twitter": 80,
      "total": 539
    },
    {
      "path": "/2015/talk/show/523b9508-0d77-11e5-8174-67dc7d574c3a",
      "title": "うっかりをなくす技術",
      "speaker_name": "karupanerura",
      "speaker_url": "https://github.com/karupanerura",
      "speaker_icon": "https://avatars.githubusercontent.com/u/374550?v=3",
      "hatena": 55,
      "twitter": 60,
      "total": 525
    },
    {
      "path": "/2015/talk/show/5b1cd536-07ed-11e5-9e42-79c97d574c3a",
      "title": "Mackerel開発におけるScalaとGo、そしてPerl",
      "speaker_name": "songmu",
      "speaker_url": "https://twitter.com/songmu",
      "speaker_icon": "http://pbs.twimg.com/profile_images/538947384420483072/5WmJP-fh_normal.jpeg",
      "hatena": 45,
      "twitter": 65,
      "total": 486
    },
    {
      "path": "/2015/talk/show/39a15ad4-0ff5-11e5-a984-d7f07d574c3a",
      "title": "実はホットでオープンな Microsoft Azure のインフラ",
      "speaker_name": "Tatsuro Hisamori",
      "speaker_url": "https://www.facebook.com/100000459480102",
      "speaker_icon": "http://graph.facebook.com/100000459480102/picture",
      "hatena": 36,
      "twitter": 77,
      "total": 477
    },
    {
      "path": "/2015/talk/show/dead6890-09b7-11e5-998a-67dc7d574c3a",
      "title": "HTTP/2 & クラウド時代のウェブアプリケーション実行基盤",
      "speaker_name": "Kazuho Oku",
      "speaker_url": "https://twitter.com/kazuho",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1656455610/__________2011-11-25_12.16.30__normal.png",
      "hatena": 41,
      "twitter": 62,
      "total": 453
    },
    {
      "path": "/2015/talk/show/bb82c8fc-12a3-11e5-962e-d9f87d574c3a",
      "title": "Yet Another Perl Cooking",
      "speaker_name": "moznion",
      "speaker_url": "https://github.com/moznion",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1422834?v=3",
      "hatena": 39,
      "twitter": 64,
      "total": 448
    },
    {
      "path": "/2015/talk/show/53aacc02-faca-11e4-8c2e-8ab37d574c3a",
      "title": "辛いことをやめる！から始まる業務改善とInfrastructure as Code",
      "speaker_name": "Yuichiro SAITO",
      "speaker_url": "https://twitter.com/koemu",
      "speaker_icon": "http://pbs.twimg.com/profile_images/3685820543/1e8215b4268fef1d97891e3d61b7b361_normal.png",
      "hatena": 38,
      "twitter": 65,
      "total": 446
    },
    {
      "path": "/2015/talk/show/82e93a96-f60e-11e4-907e-8ab37d574c3a",
      "title": "どうしてこうなった？ Node.jsとio.jsの分裂と統合の行方。これからどう進化していくのか？",
      "speaker_name": "Yosuke FURUKAWA",
      "speaker_url": "https://twitter.com/yosuke_furukawa",
      "speaker_icon": "http://pbs.twimg.com/profile_images/206948941/wall-e_normal.jpg",
      "hatena": 38,
      "twitter": 63,
      "total": 439
    },
    {
      "path": "/2015/talk/show/44721562-10e4-11e5-88a0-d7f07d574c3a",
      "title": "Effective ES6",
      "speaker_name": "Teppei Sato",
      "speaker_url": "https://github.com/teppeis",
      "speaker_icon": "https://avatars.githubusercontent.com/u/26476?v=3",
      "hatena": 28,
      "twitter": 77,
      "total": 432
    },
    {
      "path": "/2015/talk/show/dd8ce20e-fad2-11e4-b6e7-8ab37d574c3a",
      "title": "データ分析基盤を支える技術",
      "speaker_name": "Masahiro Nakagawa",
      "speaker_url": "https://github.com/repeatedly",
      "speaker_icon": "https://avatars.githubusercontent.com/u/16928?v=3",
      "hatena": 29,
      "twitter": 59,
      "total": 374
    },
    {
      "path": "/2015/talk/show/5f5cad74-004a-11e5-acf4-89c77d574c3a",
      "title": "我々にできるOSSとそのコミュニティの育てかた",
      "speaker_name": "tagomoris",
      "speaker_url": "https://twitter.com/tagomoris",
      "speaker_icon": "http://pbs.twimg.com/profile_images/525991223060746241/_ORoKYuX_normal.png",
      "hatena": 30,
      "twitter": 52,
      "total": 355
    },
    {
      "path": "/2015/talk/show/92a7bb60-1323-11e5-a252-d9f87d574c3a",
      "title": "Perl で RTB の最前線を闘い抜く",
      "speaker_name": "Satoshi Ohkubo",
      "speaker_url": "https://www.facebook.com/1121132103",
      "speaker_icon": "http://graph.facebook.com/1121132103/picture",
      "hatena": 28,
      "twitter": 51,
      "total": 340
    },
    {
      "path": "/2015/talk/show/a668ef3e-080b-11e5-b2b4-79c97d574c3a",
      "title": "どうしてもPerlでドローンを飛ばしたい人のためのハードウェアハック概論",
      "speaker_name": "macopy",
      "speaker_url": "https://twitter.com/mackee_w",
      "speaker_icon": "http://pbs.twimg.com/profile_images/419456734264954880/FYDksW9H_normal.jpeg",
      "hatena": 27,
      "twitter": 47,
      "total": 320
    },
    {
      "path": "/2015/talk/show/94051590-fb11-11e4-a39d-8ab37d574c3a",
      "title": "今フロントエンドで何が起こっているのか",
      "speaker_name": "Toru Kobayashi",
      "speaker_url": "https://github.com/koba04",
      "speaker_icon": "https://avatars.githubusercontent.com/u/250407?v=3",
      "hatena": 27,
      "twitter": 46,
      "total": 316
    },
    {
      "path": "/2015/talk/show/c2c7b8a4-faaa-11e4-a8be-8ab37d574c3a",
      "title": "サーバーサイドエンジニア(特にPerl)のためのiOSアプリ開発入門",
      "speaker_name": "Daisuke Murase",
      "speaker_url": "https://github.com/typester",
      "speaker_icon": "https://avatars.githubusercontent.com/u/3420?v=3",
      "hatena": 26,
      "twitter": 47,
      "total": 314
    },
    {
      "path": "/2015/talk/show/897abeb2-1007-11e5-a760-d7f07d574c3a",
      "title": "Perlがメインじゃない現場でもPerlを使う(AdTech現場編）",
      "speaker_name": "Masaru Hoshino",
      "speaker_url": "https://github.com/masartz",
      "speaker_icon": "https://avatars.githubusercontent.com/u/49303?v=3",
      "hatena": 27,
      "twitter": 45,
      "total": 313
    },
    {
      "path": "/2015/talk/show/9f7059dc-003c-11e5-a00c-89c77d574c3a",
      "title": "Perlで学ぼう！文系プログラマのための、知識ゼロからのデータ構造と計算量",
      "speaker_name": "Shinpei Maruyama",
      "speaker_url": "https://github.com/Shinpeim",
      "speaker_icon": "https://avatars.githubusercontent.com/u/876988?v=3",
      "hatena": 32,
      "twitter": 28,
      "total": 281
    },
    {
      "path": "/2015/talk/show/9e9ae188-fb20-11e4-9a97-8ab37d574c3a",
      "title": "HTTP2 時代の Web",
      "speaker_name": "Jxck",
      "speaker_url": "https://github.com/Jxck",
      "speaker_icon": "https://avatars.githubusercontent.com/u/322289?v=3",
      "hatena": 26,
      "twitter": 35,
      "total": 271
    },
    {
      "path": "/2015/talk/show/b396e912-091a-11e5-8d2d-67dc7d574c3a",
      "title": "大規模でも小中規模サービスでも捗る microservices な Web サービスのつくりかた",
      "speaker_name": "Kazuhiro Osawa",
      "speaker_url": "https://github.com/yappo",
      "speaker_icon": "https://avatars.githubusercontent.com/u/9958?v=3",
      "hatena": 23,
      "twitter": 35,
      "total": 254
    },
    {
      "path": "/2015/talk/show/c61a32a4-f797-11e4-bcef-8ab37d574c3a",
      "title": "WebAudio で入門する信号処理",
      "speaker_name": "cho45",
      "speaker_url": "https://github.com/cho45",
      "speaker_icon": "https://avatars.githubusercontent.com/u/3092?v=3",
      "hatena": 24,
      "twitter": 33,
      "total": 253
    },
    {
      "path": "/2015/talk/show/a4318242-f5f2-11e4-afb7-49b37d574c3a",
      "title": "実践nginxモジュール開発〜CとLua〜",
      "speaker_name": "Tatsuhiko Kubo",
      "speaker_url": "https://github.com/cubicdaiya",
      "speaker_icon": "https://avatars.githubusercontent.com/u/56752?v=3",
      "hatena": 27,
      "twitter": 27,
      "total": 249
    },
    {
      "path": "/2015/talk/show/cf39f7fc-ff44-11e4-9264-66c47d574c3a",
      "title": "Podcastを支える技術、エンジニアのためのWebメディア、そしてCPAN",
      "speaker_name": "Yusuke Wada",
      "speaker_url": "https://www.facebook.com/631255029",
      "speaker_icon": "http://graph.facebook.com/631255029/picture",
      "hatena": 18,
      "twitter": 39,
      "total": 240
    },
    {
      "path": "/2015/talk/show/a636430c-0fbf-11e5-8a02-43ec7d574c3a",
      "title": "メリークリスマス！",
      "speaker_name": "Larry Wall",
      "speaker_url": "https://github.com/TimToady",
      "speaker_icon": "https://avatars.githubusercontent.com/u/162146?v=3",
      "hatena": 22,
      "twitter": 32,
      "total": 238
    },
    {
      "path": "/2015/talk/show/f5aa5054-12fd-11e5-b4c9-d9f87d574c3a",
      "title": "はてなブックマークのトピックページの裏側",
      "speaker_name": "skozawa",
      "speaker_url": "https://twitter.com/5kozawa",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1711030185/header_title_normal.jpg",
      "hatena": 18,
      "twitter": 36,
      "total": 230
    },
    {
      "path": "/2015/talk/show/39a72c04-10e3-11e5-b8ab-d7f07d574c3a",
      "title": "perlワンライナー入門",
      "speaker_name": "Akira Sakamoto",
      "speaker_url": "https://www.facebook.com/929494707114841",
      "speaker_icon": "http://graph.facebook.com/929494707114841/picture",
      "hatena": 19,
      "twitter": 33,
      "total": 225
    },
    {
      "path": "/2015/talk/show/0af26fe4-0b7b-11e5-a29c-67dc7d574c3a",
      "title": "MySQLで2億件のシリアルデータと格闘したチューニングの話",
      "speaker_name": "さいけん",
      "speaker_url": "https://twitter.com/saiken3110",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1205361823/img_791544_45327987_0_normal.jpg",
      "hatena": 18,
      "twitter": 34,
      "total": 222
    },
    {
      "path": "/2015/talk/show/1da55daa-0deb-11e5-944c-67dc7d574c3a",
      "title": "PietでLISP処理系を書くのは難しい",
      "speaker_name": "Hideaki Nagamine",
      "speaker_url": "https://github.com/1995hnagamin",
      "speaker_icon": "https://avatars.githubusercontent.com/u/7394250?v=3",
      "hatena": 12,
      "twitter": 38,
      "total": 203
    },
    {
      "path": "/2015/talk/show/7d66b640-0a6b-11e5-b1a0-67dc7d574c3a",
      "title": "Electron: Building desktop apps with web technologies",
      "speaker_name": "Ben Ogle",
      "speaker_url": "https://github.com/benogle",
      "speaker_icon": "https://avatars.githubusercontent.com/u/69169?v=3",
      "hatena": 14,
      "twitter": 33,
      "total": 196
    },
    {
      "path": "/2015/talk/show/3fe49c10-fa67-11e4-9e02-8ab37d574c3a",
      "title": "Perl 5.22 and You",
      "speaker_name": "Ricardo Signes",
      "speaker_url": "https://github.com/rjbs",
      "speaker_icon": "https://avatars.githubusercontent.com/u/30682?v=3",
      "hatena": 12,
      "twitter": 29,
      "total": 171
    },
    {
      "path": "/2015/talk/show/a06d9970-0d7b-11e5-aaf9-67dc7d574c3a",
      "title": "Conway's Law of Distributed Work",
      "speaker_name": "Casey West",
      "speaker_url": "https://github.com/cwest",
      "speaker_icon": "https://avatars.githubusercontent.com/u/54422?v=3",
      "hatena": 11,
      "twitter": 28,
      "total": 161
    },
    {
      "path": "/2015/talk/show/32a684e8-fd21-11e4-94eb-bdc07d574c3a",
      "title": "ソーシャルゲームにおける AWS 移行事例",
      "speaker_name": "tkuchiki",
      "speaker_url": "https://twitter.com/tkuchiki",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000732873806/db63a0f75f9a217a875fa02d2ce34c04_normal.png",
      "hatena": 16,
      "twitter": 16,
      "total": 147
    },
    {
      "path": "/2015/talk/show/53944d48-09ba-11e5-998a-67dc7d574c3a",
      "title": "Perl6 on JVM: It works??",
      "speaker_name": "Tokuhiro Matsuno",
      "speaker_url": "https://github.com/tokuhirom",
      "speaker_icon": "https://avatars.githubusercontent.com/u/21084?v=3",
      "hatena": 15,
      "twitter": 16,
      "total": 142
    },
    {
      "path": "/2015/talk/show/21cb8176-065b-11e5-9492-79c97d574c3a",
      "title": "PolyglotのためのDocker - 我々はどこから来てどこへ向かうのか",
      "speaker_name": "Nathan LeClaire",
      "speaker_url": "https://twitter.com/upthecyberpunks",
      "speaker_icon": "http://pbs.twimg.com/profile_images/583855288354078720/NihdVx9o_normal.jpg",
      "hatena": 12,
      "twitter": 19,
      "total": 135
    },
    {
      "path": "/2015/talk/show/e8eebd70-f906-11e4-8f91-8ab37d574c3a",
      "title": "それは僕たちのドメイン・DNS運用",
      "speaker_name": "ぱんつの本質",
      "speaker_url": "https://twitter.com/jigyakkuma_",
      "speaker_icon": "http://pbs.twimg.com/profile_images/599475415766302720/IrXs2kkC_normal.png",
      "hatena": 11,
      "twitter": 20,
      "total": 133
    },
    {
      "path": "/2015/talk/show/e466d60a-11db-11e5-b07b-d7f07d574c3a",
      "title": "Posture for Engineers",
      "speaker_name": "Marylou Lenhart",
      "speaker_url": "https://github.com/melancholyfleur",
      "speaker_icon": "https://avatars.githubusercontent.com/u/38176?v=3",
      "hatena": 7,
      "twitter": 25,
      "total": 128
    },
    {
      "path": "/2015/talk/show/5ea2630a-133d-11e5-8cbb-d9f87d574c3a",
      "title": "Docker３兄弟について",
      "speaker_name": "アルパカ大明神[▮▮▮▯▯▯▯▯▯▯]",
      "speaker_url": "https://twitter.com/toritori0318",
      "speaker_icon": "http://pbs.twimg.com/profile_images/378800000078453409/b6bfcd56abe9253d9e41f2e14bdd038f_normal.jpeg",
      "hatena": 8,
      "twitter": 17,
      "total": 105
    },
    {
      "path": "/2015/talk/show/bd04b86c-f9de-11e4-b996-8ab37d574c3a",
      "title": "Adventures in Refactoring",
      "speaker_name": "Ben Lavender",
      "speaker_url": "https://github.com/bhuga",
      "speaker_icon": "https://avatars.githubusercontent.com/u/12676?v=3",
      "hatena": 5,
      "twitter": 21,
      "total": 102
    },
    {
      "path": "/2015/talk/show/268d730e-136c-11e5-ac8f-d9f87d574c3a",
      "title": "Perlでゼロから作るコンテナ",
      "speaker_name": "Miki Horiuchi Kabe",
      "speaker_url": "https://www.facebook.com/951266011604370",
      "speaker_icon": "http://graph.facebook.com/951266011604370/picture",
      "hatena": 9,
      "twitter": 12,
      "total": 93
    },
    {
      "path": "/2015/talk/show/93eaf068-faec-11e4-a8fd-8ab37d574c3a",
      "title": "NASA主催の世界最大級ハッカソンSpaceAppsを運営した話",
      "speaker_name": "湯村 翼 Tsubasa YUMURA",
      "speaker_url": "https://twitter.com/yumu19",
      "speaker_icon": "http://pbs.twimg.com/profile_images/599153322939916288/tRI3N4Eh_normal.jpg",
      "hatena": 5,
      "twitter": 17,
      "total": 88
    },
    {
      "path": "/2015/talk/show/0b669ad8-f616-11e4-90fb-8ab37d574c3a",
      "title": "オープンソースエンジニアのための Windows入門",
      "speaker_name": "tsubasa",
      "speaker_url": "https://twitter.com/tsubasaxZZZ",
      "speaker_icon": "http://pbs.twimg.com/profile_images/560137093/2286227_3079062002_normal.jpg",
      "hatena": 7,
      "twitter": 11,
      "total": 78
    },
    {
      "path": "/2015/talk/show/f283a924-fddc-11e4-90cd-bdc07d574c3a",
      "title": "DeepLearning の前に知っておくことがある！ 再帰型のニューラルネットワークや自己組織化マップについて語ろう",
      "speaker_name": "muddydixon",
      "speaker_url": "https://github.com/muddydixon",
      "speaker_icon": "https://avatars.githubusercontent.com/u/10035?v=3",
      "hatena": 8,
      "twitter": 8,
      "total": 73
    },
    {
      "path": "/2015/talk/show/81342dae-1351-11e5-ab94-d9f87d574c3a",
      "title": "カンファレンスネットワークの作り方",
      "speaker_name": "CONBU",
      "speaker_url": "https://twitter.com/conbu_net",
      "speaker_icon": "http://pbs.twimg.com/profile_images/476568469920415744/wdOm99Aa_normal.png",
      "hatena": 9,
      "twitter": 6,
      "total": 72
    },
    {
      "path": "/2015/talk/show/b03162be-0052-11e5-ba92-89c77d574c3a",
      "title": "Run containerized workloads with Lattice",
      "speaker_name": "Etourneau Gwenn",
      "speaker_url": "https://github.com/shinji62",
      "speaker_icon": "https://avatars.githubusercontent.com/u/4757816?v=3",
      "hatena": 3,
      "twitter": 15,
      "total": 70
    },
    {
      "path": "/2015/talk/show/5ceebdcc-136c-11e5-a014-d9f87d574c3a",
      "title": "サンタクロースを支えるIT技術",
      "speaker_name": "Masayuki Ishikawa",
      "speaker_url": "https://www.facebook.com/100001054610433",
      "speaker_icon": "http://graph.facebook.com/100001054610433/picture",
      "hatena": 2,
      "twitter": 10,
      "total": 46
    },
    {
      "path": "/2015/talk/show/b355fa20-122e-11e5-8ba5-d9f87d574c3a",
      "title": "言語開発の現場",
      "speaker_name": "SHIBATA Hiroshi",
      "speaker_url": "https://github.com/hsbt",
      "speaker_icon": "https://avatars.githubusercontent.com/u/12301?v=3",
      "hatena": 5,
      "twitter": 5,
      "total": 46
    },
    {
      "path": "/2015/talk/show/e19fe827-13c1-11e5-aca1-525412004261",
      "title": "Managing Containers at Scale with CoreOS and Kubernetes",
      "speaker_name": "Kelsey Hightower",
      "speaker_url": "https://github.com/kelseyhightower",
      "speaker_icon": "https://avatars.githubusercontent.com/u/1123322?v=3",
      "hatena": 2,
      "twitter": 9,
      "total": 43
    },
    {
      "path": "/2015/talk/show/ad57ca84-13e9-11e5-aca1-525412004261",
      "title": "【特別企画】YAPCあるある（仮）",
      "speaker_name": "鎌田武俊",
      "speaker_url": "https://www.facebook.com/1261488582",
      "speaker_icon": "http://graph.facebook.com/1261488582/picture",
      "hatena": 2,
      "twitter": 8,
      "total": 39
    },
    {
      "path": "/2015/talk/show/e14c5ae0-12f7-11e5-a909-d9f87d574c3a",
      "title": "【sponsored contents】若手エンジニア達の生存戦略",
      "speaker_name": "みそ ｼﾞﾝｼﾞﾆｱ",
      "speaker_url": "https://twitter.com/crazygirl_lover",
      "speaker_icon": "http://pbs.twimg.com/profile_images/599568269507342336/jb_Rk7sX_normal.jpg",
      "hatena": 2,
      "twitter": 2,
      "total": 18
    },
    {
      "path": "/2015/talk/show/6964fd88-f5e8-11e4-b323-49b37d574c3a",
      "title": "クロージング 🎉",
      "speaker_name": "Daisuke Maki",
      "speaker_url": "https://twitter.com/lestrrat",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1223562029/DSC00001_normal.JPG",
      "hatena": 0,
      "twitter": 1,
      "total": 3
    },
    {
      "path": "/2015/talk/show/22f59fb8-0fad-11e5-98ef-43ec7d574c3a",
      "title": "Parallelism, Concurrency, and Asynchrony in Perl 6",
      "speaker_name": "Jonathan Worthington",
      "speaker_url": "https://github.com/jnthn",
      "speaker_icon": "https://avatars.githubusercontent.com/u/50259?v=3",
      "hatena": 0,
      "twitter": 1,
      "total": 3
    },
    {
      "path": "/2015/talk/show/1ffa6f7a-f5e8-11e4-a4ec-49b37d574c3a",
      "title": "Opening",
      "speaker_name": "Daisuke Maki",
      "speaker_url": "https://twitter.com/lestrrat",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1223562029/DSC00001_normal.JPG",
      "hatena": 0,
      "twitter": 1,
      "total": 3
    },
    {
      "path": "/2015/talk/show/69caedbd-1872-11e5-aca1-525412004261",
      "title": "Lightning Talks Day 2",
      "speaker_name": "Daisuke Maki",
      "speaker_url": "https://twitter.com/lestrrat",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1223562029/DSC00001_normal.JPG",
      "hatena": 0,
      "twitter": 0,
      "total": 0
    },
    {
      "path": "/2015/talk/show/6bde6c69-187a-11e5-aca1-525412004261",
      "title": "TBD",
      "speaker_name": "Brad Fitzpatrick",
      "speaker_url": "https://twitter.com/bradfitz",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1376628217/brad_normal.jpg",
      "hatena": 0,
      "twitter": 0,
      "total": 0
    },
    {
      "path": "/2015/talk/show/ae1cce86-1874-11e5-aca1-525412004261",
      "title": "懇親会",
      "speaker_name": "Daisuke Maki",
      "speaker_url": "https://twitter.com/lestrrat",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1223562029/DSC00001_normal.JPG",
      "hatena": 0,
      "twitter": 0,
      "total": 0
    },
    {
      "path": "/2015/talk/show/22957e9c-1872-11e5-aca1-525412004261",
      "title": "Lightning Talks Day 1",
      "speaker_name": "Daisuke Maki",
      "speaker_url": "https://twitter.com/lestrrat",
      "speaker_icon": "http://pbs.twimg.com/profile_images/1223562029/DSC00001_normal.JPG",
      "hatena": 0,
      "twitter": 0,
      "total": 0
    },
    {
      "path": "/2015/talk/show/cc0ec485-1879-11e5-aca1-525412004261",
      "title": "TBD",
      "speaker_name": "Yukihiro \"Matz\" Matsumoto",
      "speaker_url": "https://github.com/matz",
      "speaker_icon": "https://avatars.githubusercontent.com/u/30733?v=3",
      "hatena": 0,
      "twitter": 0,
      "total": 0
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

  $('#updated').text('' + new Date(_rankingJson.date).toISOString() + ' 更新');

  _rankingJson.ranking.forEach(function (talk, i) {
    var tr = document.createElement('tr');
    var url = YAPC_URL + talk.path;
    tr.innerHTML = html(_taggedTemplateLiteral(['\n<td>', '</td>\n<td><a href="', '">', '</a></td>\n<td><a href="', '"><img class="speaker-icon" src="', '">', '</a></td>\n<td><a href="https://twitter.com/search?q=', '" class="social-count">', '</a></td>\n<td><a href="http://b.hatena.ne.jp/entry/yapcasia.org', '" class="social-count">', '</a></td>\n<td>', '</td>'], ['\n<td>', '</td>\n<td><a href="', '">', '</a></td>\n<td><a href="', '"><img class="speaker-icon" src="', '">', '</a></td>\n<td><a href="https://twitter.com/search?q=', '" class="social-count">', '</a></td>\n<td><a href="http://b.hatena.ne.jp/entry/yapcasia.org', '" class="social-count">', '</a></td>\n<td>', '</td>']), i + 1, url, talk.title, talk.speaker_url, talk.speaker_icon, talk.speaker_name, encodeURIComponent(url), talk.twitter, talk.path, talk.hatena, talk.total).replace(/\n/g, '');
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
