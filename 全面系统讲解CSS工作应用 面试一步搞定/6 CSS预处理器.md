# CSS预处理器

- 基于CSS的另一种语言
- 通过工具编译成CSS
- 添加了很多CSS不具备的特性
- 能提升CSS文件的组织
- less / Sass (Scss)

---

- 嵌套 反映层级和约束
- 变量和计算 减少重复代码
- Extend和Mixin 代码片段
- 循环 适用于复杂有规律的样式
- import CSS文件模块化

## less

```less
@fontSize: 12px;
@bgColor: red;

.wrapper {
    background: lighten(@bgColor, 40%);

    .nav {
        font-size: @fontSize;
    }
    .content {
        font-size: @fontSize + 2px;
        &:hover { /* &表同级 */
            background: red;
        }
    }
}
```

## Sass

```Scss
$fontSize: 12px;
$bgColor = red;

.wrapper {
    background: lighten($bgColor, 40%);

    .nav {
        font-size: $fontSize;
    }
    .content {
        font-size: $fontSize + 2px;
        &:hover { /* &表同级 */
            background: red;
        }
    }
}
```

## Mixin

```less
.block(@fontSize) {
    font-size: @fontSize;
}
.box {
    color: red;
}
.wrapper {
    .block(@fontSize + 2px);
    .box();
}
```

```Scss
@mixin block($fontSize) {
    font-size: $font-size;
}
.wrapper {
    @include block($fontSize + 2px);
}
```

## Extend

- 公共样式不复制 选择器写到一起
- less

    ```less
    .block {
        font-size: @fontSize;
    }

    .wrapper:extend(.block) {
        color: red;
    }
    /* 等价于 */
    .wrapper {
        &:extend(.block);
        color: red;
    }
    ```

- Scss

    ```Scss
    .block {
        font-size: $fontSize;
    }

    .wrapper {
        @extend .block;
        color: red;
    }
    ```

## loop

- less
  - 不支持循环，使用递归实现

    ```less
    .gen-col(@n) when (@n > 0) {
        .gen-col(@n - 1);
        .col-@{n} {
            width: 1000px / 12 * @n;
        }
    }
    .gen-col(12);
    ```

- Scss

    ```Scss
    @mixin gen-col($n) {
        @if $n > 0 {
            @include gen-col($n - 1);
            .col-#{$n}{
                width: 1000px / 12 * $n;
            }
        }
    }

    @include gen-col(12);

    /* Scss支持for loop */
    @for $i from 1 through 12 {
        .col-#{$i} {
            width: 1000px / 12 * $i;
        }
    }
    ```

## import

- less

    ```less
    @import "logo";
    @import "header";
    @import "nav";
    @import "article";
    @import "foot";
    ```

- Scss

    ```Scss
    @import "logo";
    @import "header";
    @import "nav";
    ```

## 预处理器框架

- SASS - Compass
- Less - Lesshat / EST
- 提供现成的mixin
- 类似JS类库 分装常用功能

- less

    ```less
    @import "est/all" /* Mixin为按需引用 所以可以直接import all */

    @support-ie-version: 7;
    @use-autoprefixer: false;

    .global-reset();

    .box {
        .inline-block();
        .opacity(60);
        height: 100px;
        background: green;
        margin: 10px;
    }
    .left {
        float: left;
        .clearfix();
    }

    .row {
        .make-row();
        .col {
            .make-column(1/4);
            background: red;
            height: 100px;
        }
    }

    .my-triangle::after {
        content: ' ';
        .triangle(top left, 10px, red, side);
    }
    ```

## 面试真题

1. 常见的CSS预处理器
   - Less(Node.js)
   - Sass(Ruby 有Node版本)
2. 预处理器的作用
   - 帮助更好地组织CSS代码
   - 提高代码复用率
   - 提升可维护性
3. 预处理器的能力
   - 嵌套 反映层级和约束
   - 变量和计算 减少重复代码
   - Extend和Mixin代码片段
   - 循环 适用于复杂有规律的样式
   - import CSS文件模块化
4. 预处理器的优缺点
   - 优点
     - 提高代码复用率和可维护性
   - 缺点
     - 需要引入编译过程 有学习成本
