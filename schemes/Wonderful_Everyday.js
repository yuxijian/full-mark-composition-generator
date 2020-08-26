//网页按钮标题“素学”，我没找到定义按钮的样式在哪里。。。

schemes['Wonderful_Everyday'] = {
    //三个学科 其中第一个是主学科 后两个是相关学科
    subj: ['素晴日', '美好的每一天', '不连续的存在'],
    //至少1个有关第一个学科的 字面上可以解释为物理结构的词
    stru: ['素', '纳吉尔法的船', '宇宙顶点', '夏之大三角', '向日葵与坡道'],
    //至少9个有关第一个学科的名人名言
    //因为扶她自的鬼话实在是太多了，欢迎各位素学家继续改进
    cele: [
        ['赫尔曼·黑塞', '严肃认真是由于过高估计时间的价值而产生的。'],
        ['宫泽贤治', '要为了寻找所有人的最终的幸福，和大家一起尽快到达那理想之乡。'],
        ['康德', '通过前者，对象被给予我们，通过后者，对象被我们思维。'],
        ['库萨的尼古拉', '在一切存在物之中唯独只有极大存在于其自身之中，而一切事物都在极大之中，一如在他们自己的本质之中，因为极大就是一切事物的本质。'],
        ['维特根斯坦', '世界的意义必定存在于世界之外。'],
        ['维特根斯坦', '主体不属于世界，然而它是世界的一个界限。世界的意义必定在世界之外。世界中一切事情就如它们之所是而是，如它们之所发生而发生。所以，世界中不存在价值。'],
        ['尼采', '上帝死了。'],
        ['西哈诺·德·贝热拉克', '我们的情人不过是随便借个名字，用幻想吹出来的肥皂泡。'],
        ['西哈诺·德·贝热拉克', '当世界走向尽头的时候，当宇宙毁灭的时候，我还是要带那样东西！你们永远抢不走！那是最宝贵的东西！'],
        ['间宫卓司', '愚者说：切莫说谎，但是世人知道：愚者就在说谎。'],
        ['水上由崎', '去吧······英雄······'],
    ],
    //至少3个有关第一个学科的思想（主义）
    prin: ['爱丽丝镜中奇遇记', '逻辑哲学论', '轻飘飘的衣服', '剑客'],
    //至少3个有关第一个学科的性质
    prop: ['电波', '治愈', '狂气'],
    //至少6个有关第一个学科的概念
    conc: ['空气力学', '螺旋马太', '三位一体', '圣启示录', '终之空', '偏在转生', '救世主'],
    init: function (){
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}
