lg1 = {
  link : "./eg-zews/index.html",
  img : "https://static.hltv.org/images/galleries/12029-medium/1575378187.3497.jpeg",
  text : "EG Заинтересованы в переговорах с zews - Слухи"
}
md1 = {
 link : "./major-system/index.html",
 img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqGfcZy0UgtPf5VIO9mWjjqsahJoDCkLaB8FIcvTTZ4athqH7Q&usqp=CAU",
 text: "ESL изменили систему проведения мажора ESL one Rio",
}
md2 = {
    link : "./queenix-new-team/index.html",
    img : "https://pbs.twimg.com/media/EVF3GmpXsAAjU66?format=jpg&name=small",
    text: "Queenix присоединился к новой команде",
}
sm1 = {
    link : "./captainmo-new-roster/index.html",
    img : "https://static.hltv.org/images/galleries/11476-medium/1536834340.122.jpeg",
    text: "CAPTAINMO и AE создают новый состав",
}
sm2 = {
    link : "./teses-join-heroic/index.html",
    img : "https://static.hltv.org/images/galleries/11954-medium/1570023061.1536.jpeg",
    text: "TeSeS присоиденяется к Heroic",
}
news1 = {
    title : "СYBSPORT - HellRaisers делают перестановки в составе",
    heading : "«Восставшие из ада» объявили, что Кирилл «ANGE1» Карасёв и Игорь «СRUSH» Шевченко решили покинуть команду, а остальную часть состава перенесли на скамейку запасных.",
    previewimg : "https://static.hltv.org//images/galleries/1693-full/1585848838.5912.jpeg",
    newstext: " Анонс последовал за серией разочаровывающих результатов команды, которая даже не смогла пробиться в топ-30 в мировом рейтинге и финишировала 9-12 в недавнем отборочном туре по Малой СНГ после поражения от Винстрика и Эспады.",
   
   
    link : "./hr-benched/index.html"
}
news2 = {
    title : "СYBSPORT - Как коронавирус повлеял на киберспортивную сцену",
    heading : "Обновление статусов турниров.Или как коронавирус повлеял на ЛАН турниры.",
    previewimg : "https://static.hltv.org//images/galleries/1693-full/1584892620.987.jpeg",
    newstext: "", 
    link: "./covid-impact/index.html"
}
news3 = {
    title : "СYBSPORT - Баланс оружия и нерф SG",
    heading : "Обновление СS:GO принесло нерф SG и балансировку оружия.",
    previewimg : "https://static.hltv.org//images/galleries/1693-full/1586563400.0023.jpeg",
    newstext: "",
    link : "./new-update/index.html",
}
$(".1limg").attr("src", lg1.img);
$(".l1text").append(lg1.text);
$(".1lhref").attr("href", lg1.link);
$(".1shref").attr("href", sm1.link);
$(".2shref").attr("href", sm2.link);
$(".1mhref").attr("href", md1.link);
$(".2mhref").attr("href", md2.link);
$(".1simg").attr("src", sm1.img);
$(".1slink").attr("href", sm1.link)
$(".1stext").append(sm1.text);
$(".2simg").attr("src", sm2.img);
$(".2slink").attr("href", sm2.link)
$(".2stext").append(sm2.text);
$(".1mimg").attr("src", md1.img);
$(".1mlink").attr("href", md1.link)
$(".1mtext").append(md1.text);
$(".2mimg").attr("src", md2.img);
$(".2mlink").attr("href", md2.link)
$(".2mtext").append(md2.text);
$(".newstitle").append(news1.title);
$(".news1-sector").append(news1.heading);
$(".imgn1").attr("src" , news1.previewimg);
$(".imgn2").attr("src", news2.previewimg)
$(".news2-sector").append(news2.heading)
$(".imgn3").attr("src", news3.previewimg)
$(".news3-sector").append(news3.heading)
$(".news1h").attr("href", news1.link);
$(".news2h").attr("href", news2.link);
$(".news3h").attr("href", news3.link);
$(".news1t").append(news1.title);
$(".news2t").append(news2.title);
$(".news3t").append(news3.title);
$(".newsimg1t").append(lg1.text);
$(".newsimg2t").append(sm1.text);
$(".newsimg3t").append(sm2.text);
$(".newsimg4t").append(md1.text);
$(".newsimg5t").append(md2.text);
$(".heading").append(news1.heading)



