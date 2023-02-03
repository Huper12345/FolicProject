import React from "react";
import "./GoodStuff.css";
import { Title } from "../../helpers/Title";
import { GoodStuffItem } from "./GoodStuffItem";
import OneGS from "../../helpers/assets/Images/GoodStuff-pack/OneGS.webp";
import TwoGS from "../../helpers/assets/Images/GoodStuff-pack/TwoGS.webp";
import ThirdGS from "../../helpers/assets/Images/GoodStuff-pack/ThirdGS.webp";
import FourGS from "../../helpers/assets/Images/GoodStuff-pack/FourGS.webp";

export const GoodStuff = () => {
  return (
    <section className="section">
      <div className="GoodStuff">
        <div className="container">
          <Title text="Полезные материалы для" subtext="беременных" />
          <div className="GoodStuff-Inner">
            <GoodStuffItem
              title="Рацион питания для беременной женщины"
              subText="Во время беременности бывает сложно определить, какие продукты
              можно кушать беременным. Чтобы сузить круг вопросов, мы собрали
              несколько идеальных продуктов, которые следует добавить, чтобы
              создать сбалансированную диету для беременной женщины."
              dropTitle1="Крупы (гречка, рис, пшеница, овес, рожь и др.). "
              dropText1="Каши не только
              содержат полезные витамины и аминокислоты, но и являются сложными
              углеводами, которые долго поддерживают ощущение сытости."
              dropTitle2="Свежие фрукты и овощи. "
              dropText2="В овощах и фруктах содержатся важные
              витамины, питательные вещества, волокна и антиоксиданты, –
              многие из которых играют ключевую роль в развитии и поддержании
              здоровья ребенка. Разноцветные фрукты и овощи в вашем рационе не
              только добавят красок, но и привнесут множество витаминов,
              питательных веществ, волокон и антиоксидантов, важных для
              здорового протекания беременности."
              dropTitle3="Мясо. "
              dropText3="Мясо богато магнием, цинком, витаминами группами В и также
              всеми важными аминокислотами, служит основным поставщиком железа
              в организм, которое просто необходимо для построения
              кроветворной системы будущего малыша."
              dropTitle4="Темная листовая зелень. "
              dropText4="Беременны вы или нет, всегда полезно
              есть зелень. Темные и листовые овощи, такие как капуста, шпинат
              и брокколи, богаты фолатами и другими витаминами."
              dropTitle5="Бобовые. "
              dropText5="Чечевица особенно богата фолиевой кислотой. Другие
              бобовые, такие как фасоль и горох, содержат белок, и они дадут
              ощущение сытости, а также будут питать вашего растущего ребенка."
              dropTitle6="Сладкий картофель, морковь, сладкий перец. "
              dropText6="Красные, оранжевые и
              желтые овощи не только делают вашу тарелку красивой и красочной,
              но и содержат бета-каротин, который превращается в витамин А."
              dropTitle7="Лосось и другие жирные виды рыбы. "
              dropText7="Лосось - отличный источник
              жирных кислот омега-3. Многие беременные женщины вообще избегают
              рыбы, но одна или две порции этого блюда в неделю - отличный
              вариант обеда или ужина."
              dropText8="Женщинам, не употребляющим мяса, рыбы, курицы, молока, яиц, или
              некоторых из этих продуктов, рекомендуется проконсультироваться
              с диетологом."
              dropTitle9="Желательно снизить употребление в период беременности: "
              dropText9="сладости,
              снеки и подслащенные напитки; продукты, содержащие кофеин;
              приправы и специи: перец красный и черный, горчица, хрен, уксус,
              гвоздика, майонез, кетчуп; искусственные подсластители;
              фаст-фуд; копчености; спиртные напитки; любые жареные блюда или
              приготовленные во фритюре."
              dropTitle10="Важно! "
              dropText10="Если у вас есть ограничения в питании, посоветуйтесь с
              акушером-гинекологом или диетологом, чтобы подобрать здоровую
              сбалансированную диету в период вынашивания плода. Если есть
              некоторые проблемы со здоровьем (пищевая аллергия,
              непереносимость глютена) важно придерживаться гипоаллергенной
              или безглютеновой диеты, ваш врач будет контролировать течение
              беременности и включит дополнительный прием питательных веществ,
              минералов, витаминов."
              dropTitle12="Помните! "
              dropText11="Не всегда рацион питания может восполнить дефицит
              фолиевой кислоты, которая необходима Вашему ребенку."
              Image={OneGS}
            />
            <GoodStuffItem
              Image={TwoGS}
              title="Питьевой режим беременной женщины"
              subText="Большинство женщин не пьет достаточно воды, поэтому поставьте перед собой задачу - изменить это во время беременности. Прием жидкости уменьшает тошноту, регулирует температуру тела и увеличивает уровень энергии."
              dropTitle1="Старайтесь выпивать 6–8 стаканов воды в день. "
              dropText1="Всегда носите с собой бутылку с водой, если собираетесь куда-нибудь. Идеальным вариантом станет обычная питьевая вода. Хотя газированные напитки и фруктовые соки могут утолить жажду, именно вода лучше всего подходит для развивающегося ребенка. "
              dropTitle2="Безопасность воды. "
              dropText2="Важно не забывать не только о количестве, но и о качестве воды. Питьевая вода должна соответствовать всем санитарно-гигиеническим нормам и требованиям. Вызывает беспокойство наличие посторонних примесей в воде (ртуть, свинец, мышьяк, нитраты, ВРА). Также в воду могут попадать патогенные микроорганизмы. Чтобы убедиться, что вода является достаточно безопасной, вы можете сдать воду на анализ в государственной или частной лаборатории. Бутилированную воду нужно хранить в темном прохладном месте при температуре от 5 до 20 С. Открытую бутылку с водой нужно хранить в холодильнике.
              На отдыхе будьте особенно внимательными по профилактике кишечных инфекций. Для мытья посуды и рук используйте профильтрованную и проваренную воду и обеспечьте запас питьевой воды. Не употребляйте непастеризованные молочные продукты и фруктовые / овощные фреши, смузи, непастеризованные замороженные соки и мороженое."
            />
            <GoodStuffItem
              Image={ThirdGS}
              title="Интересные факты о фолиевой кислоте"
              dropTitle1="Фолат "
              dropText1="впервые был обнаружен учеными в листьях шпината."
              dropTitle2="Название «Фолат» "
              dropText2="происходит от латинского слова «Folium», что означает «Лист»."
              dropTitle3="Фолат "
              dropText3="регулирует рост и развитие человека с момента формирования плода в утробе матери."
              dropTitle4="Фолиевую кислоту "
              dropText4="по другому называют витамин В9 или витамин Вс."
              dropTitle5="Регулярный прием "
              dropText5="фолиевой кислоты поможет снизить уровень усталости, улучшить качество сна."
              dropTitle6="Серотонин – гормон счастья "
              dropText6="– вырабатывается благодаря фолиевой кислоте."
            />

            <GoodStuffItem
              Image={FourGS}
              title="Как должна спать будущая мама?"
              subText="Этот вопрос волнует многих беременных женщин. В данный период организм испытывает повышенные нагрузки, именно полноценный сон является самым эффективным способом восстановления жизненных ресурсов."
              dropTitle1="Во время беременности "
              dropText1="вероятно придётся поменять некоторые привычки."
              dropText2="Например, вы любите спать на спине, а значит под верхнюю часть туловища следует подложить подушку, дабы не возникало давления на легкие, что нередко становится причиной появления одышки."
              dropText3="Возрастающая нагрузка на позвоночник, обусловленная ростом плода и весом женщины, зачастую может сопровождаться болью в спине. Для создания правильного положения тела при беременности, существуют специальные гипоаллергенные подушки, разнообразных форм и размеров."
              dropText4="Многие женщины, в силу многолетней привычки, спят на животе, но с наступлением беременности этого делать нельзя, даже на ранних сроках."
              dropTitle5="Несоблюдение данных правил "
              dropText5="зачастую осложняет процесс протекания беременности и становится возникновением плохого самочувствия беременной женщины."
              dropTitle6="Также не забывайте о наших препаратах: Фолиевая кислота 0,4 мг и Сон Бай. "
              dropText6="Прием фолиевой кислоты в дозировке 0,4 мг в период беременности указан в Рекомендации ВОЗ по оказанию дородовой помощи и в Клиническом протоколе МЗ РБ №17 от 19.02.2018: «Медицинское наблюдение и оказание медицинской помощи женщинам в акушерстве и гинекологии»."
              dropTitle7="СОН БАЙ "
              dropText7="не вызывает привыкание и может применяться на любых сроках беременности.
              Подробнее вы можете узнать на информационном сайте"
              dropLink7=" son-by.by"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
