<div id="${轮播divId}" class="carousel slide" data-ride="carousel">

    <!-- 指示符 -->
    <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
    </ul>

    <!-- 轮播图片 -->
    <div class="carousel-inner">
        <div class="carousel-item active">
            <asset:image src="cup/\${cn.edu.cup.basic.Caption.findByName('${图片1}')?.logo}"/>
        </div>

        <div class="carousel-item">
            <asset:image src="cup/\${cn.edu.cup.basic.Caption.findByName('${图片2}')?.logo}"/>
        </div>

        <div class="carousel-item">
            <asset:image src="cup/\${cn.edu.cup.basic.Caption.findByName('${图片3}')?.logo}"/>
        </div>
    </div>

    <!-- 左右切换按钮 -->
    <a class="carousel-control-prev" href="#${轮播divId}" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#${轮播divId}" data-slide="next">
        <span class="carousel-control-next-icon"></span>
    </a>

</div>
