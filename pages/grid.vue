<script setup lang="ts">
import Codeblock from '~/components/Codeblock.vue';
import Note from '~/components/Note.vue';
const example1 = `div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: auto 100px 100px;
}`;

const example2 = `div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: 1fr 2fr 1fr;
}`;

const example3 = `div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
}`;

const example4 = `div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-rows: 100px;
}`;

const example5 = `div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: minmax(200px, 1fr) 2fr 1fr;
}`;

const example6 = `div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 10px;
}`;

const example7 = `div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(
        auto-fill, 
        minmax(200px, 1fr)
    );
    grid-gap: 10px;
    padding: 10px;
}`;

const example8 = `div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

div:first-child {
    background-color: #0af31e;
    border: 1px solid #18aa05;
    grid-column-start: 1;
    grid-column-end: 3;
}

.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(
        auto-fit, 
        minmax(200px, 1fr)
    );
    grid-gap: 10px;
    padding: 10px;
    grid-auto-rows: 100px;
}`;

const example9 = `div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

div:first-child {
    background-color: #0af31e;
    border: 1px solid #18aa05;
    grid-row-start: 1;
    grid-row-end: 3;
}

.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(
        auto-fit, 
        minmax(200px, 1fr)
    );
    grid-gap: 10px;
    padding: 10px;
    grid-auto-rows: 100px;
}`;

const example10 = `div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

div:first-child {
    background-color: #0af31e;
    border: 1px solid #18aa05;
    grid-column-start: span 2;
    grid-row-start: span 2;
}

.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(
        auto-fit, 
        minmax(200px, 1fr)
    );
    grid-gap: 10px;
    padding: 10px;
    grid-auto-rows: 100px;
}`;

const example11 = `.container {
    display: grid;
    border: 1px solid #ccc;
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 35px 1fr 40px;
    min-height: 100vh;
    grid-template-areas: 
        "header header header"
        "nav main aside"
        "footer footer footer";
}
        
header {
    grid-area: header;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}
    
nav {
    grid-area: nav;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}
    
main {
    grid-area: main;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}
    
aside {
    grid-area: aside;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}
    
footer {
    grid-area: footer;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}`;




</script>
<template>
    <h1>Grid</h1>
    <Codeblock :code="example1" />
    <section class="example1 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </section>
    <Note title="Nota">
        <p>La propiedad <code>display:grid</code> permite distribuir el contenido en filas y columnas.</p>
        <p>La propiedad <code>grid-template-columns</code> permite definir el ancho de las columnas. La cantidad de
            columna estará dada por la cantidad de veces que espifiquemos el ancho de estas.</p>
    </Note>
    <Codeblock :code="example2" />
    <section class="example2 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </section>
    <Note title="Nota">
        <p>En este ejemplo utilizamos la unidad de medida <code>fr</code>, que significa que el ancho se divide en
            fracciones.</p>
        <p>En este caso, la primera columna ocupa 1 fracción, la segunda 2 fracciones y la tercera 1 fracción.</p>
    </Note>
    <Codeblock :code="example3" />
    <section class="example3 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </section>
    <Note title="Nota">
        <p>En este ejemplo, además de definir las columnas, también definimos las filas con la propiedad
            <code>grid-template-rows</code>.
        </p>
    </Note>
    <Codeblock :code="example4" />
    <section class="example4 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </section>
    <Note title="Nota">
        <p>En este ejemplo, además de definir las columnas y filas, también definimos el alto de las filas que se
            generan automáticamente con la
            propiedad <code>grid-auto-rows</code>. Esto significa que las que no están dentro del template tomarán el
            alto definido en <code>grid-auto-rows</code>.</p>
        <p>Si te fijas, hemos introducido una nueva forma de indicar las columnas y las filas usando la función
            <code>repeat</code>
        </p>
    </Note>
    <Codeblock :code="example5" />
    <section class="example5 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </section>
    <Note title="Nota">
        <p>En este ejemplo, además de definir las columnas, también definimos el ancho mínimo y máximo de la primera
            columna con la función <code>minmax</code>.</p>
    </Note>
    <Codeblock :code="example6" />
    <section class="example6 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </section>
    <Note title="Nota">
        <p>En este ejemplo, además de definir las columnas, también definimos el espacio entre las columnas con la
            propiedad <code>grid-column-gap</code>.</p>
        <p>Además, también definimos el espacio entre las filas con la propiedad <code>grid-row-gap</code>.</p>
    </Note>
    <Codeblock :code="example7" />
    <section class="example7 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </section>
    <Note title="Nota">
        <p>En este ejemplo el tamaño mínimo de las columnas será de <code>200px</code> y con la propiedad
            <code>auto-fill</code> le indicamos que si el ancho del view port es de <code>400px</code>, muestre 2
            columnas y si es de <code>600px</code> muestre 3 y así sucesivamente.
        </p>
        <p>También podemos ver que para evitar el uso de <code>grid-column-gap</code> y <code>grid-row-gap</code>,
            usamos <code>grid-gap</code></p>
        <p>Además de <code>auto-fill</code>, existe la propiedad <code>auto-fix</code>. La diferencia de
            <code>auto-fit</code> es que ajusta el contenido hasta los límites (Esto sólo se nota con pocos elementos).
        </p>
    </Note>
    <Codeblock :code="example8" />
    <section class="example8 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </section>
    <Note title="Nota">
        <p>En este ejemplo usamos las propiedades <code>grid-column-start</code> y <code>grid-column-start</code>. En
            este caso comienza desde la línea 1 hasta la línea 3 (usa 2 columnas)</p>
    </Note>
    <Codeblock :code="example9" />
    <section class="example9 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </section>
    <Note title="Nota">
        <p>En este ejemplo usamos las propiedades <code>grid-row-start</code> y <code>grid-row-start</code>. En este
            caso comienza desde la línea 1 hasta la línea 3 (usa 2 filas)</p>
    </Note>
    <Codeblock :code="example10" />
    <section class="example10 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </section>
    <Note title="Nota">
        <p>En este ejemplo usamos las propiedades <code>grid-column-start</code> y <code>grid-row-start</code>, con el
            valor <code>span 2</code>. En este ocupa 2 columnas y 2 filas</p>
        <p>Una forma de hacer lo mismo es con las propiedades <code>grid-column: 1 / 3; (usa 2 columnas)</code> y
            <code>grid-row: 1 / 3 (usa 2 filas);</code>
        </p>
        <p>En el caso de usar las propiedades <code>grid-column</code> y <code>grid-row</code>, se pueden usar valores
            negativos para llegar a los límites de la grilla.</p>
        <p>Otro caso de uso importante es en el caso de que se quieran poner elementos sobre otros usando grid. Por
            ejemplo si tenemos un <code>div</code> con <code>grid-column: 1/3</code> y otro <code>div</code> con
            <code>grid-column: 1/3;</code>, el segundo <code>div</code> quedará sobre el otro.
        </p>
    </Note>
    <Codeblock :code="example11" />
    <section class="example11 container">
        <header>Header</header>
        <nav>Nav</nav>
        <main>Main</main>
        <aside>Aside</aside>
        <footer>Footer</footer>
    </section>
    <Note title="Nota">
        <p>En este ejemplo, además de definir las columnas y filas, también definimos las áreas con la propiedad
            <code>grid-template-areas</code>.
        </p>
        <p>Para asignar un área a un elemento, usamos la propiedad <code>grid-area</code> con el nombre del área
            definida en <code>grid-template-areas</code>.</p>
        <p>Si pones un <code>"."</code> en vez del nombre de un área, el elemento no se mostrará.
        </p>
    </Note>
</template>
<style scoped>
.example1.container>div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example1.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: auto 100px 100px;
}

.example2.container>div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example2.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: 1fr 2fr 1fr;
}

.example3.container>div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example3.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
}

.example4.container>div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example4.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-rows: 100px;
}

.example5.container>div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example5.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: minmax(200px, 1fr) 2fr 1fr;
}

.example6.container>div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example6.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 10px;
}

.example7.container>div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example7.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(auto-fill,
            minmax(200px, 1fr));
    grid-gap: 10px;
    padding: 10px;
}

.example8.container>div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example8.container>div:first-child {
    background-color: #0af31e;
    border: 1px solid #18aa05;
    grid-column-start: 1;
    grid-column-end: 3;
}

.example8.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(auto-fit,
            minmax(200px, 1fr));
    grid-gap: 10px;
    padding: 10px;
    grid-auto-rows: 100px;
}

.example9.container>div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example9.container>div:first-child {
    background-color: #0af31e;
    border: 1px solid #18aa05;
    grid-row-start: 1;
    grid-row-end: 3;
}

.example9.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(auto-fit,
            minmax(200px, 1fr));
    grid-gap: 10px;
    padding: 10px;
    grid-auto-rows: 100px;
}

.example10.container>div {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example10.container>div:first-child {
    background-color: #0af31e;
    border: 1px solid #18aa05;
    grid-column-start: span 2;
    grid-row-start: span 2;
}

.example10.container {
    display: grid;
    background-color: lightsalmon;
    border: 1px solid #ccc;
    grid-template-columns: repeat(auto-fit,
            minmax(200px, 1fr));
    grid-gap: 10px;
    padding: 10px;
    grid-auto-rows: 100px;
}

.example11.container {
    display: grid;
    border: 1px solid #ccc;
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 35px 1fr 40px;
    min-height: 100vh;
    grid-template-areas: "header header header" "nav main aside" "footer footer footer";
}

.example11.container>header {
    grid-area: header;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
    margin: 0;
    box-shadow: none;
    z-index: auto;
}

.example11.container>nav {
    grid-area: nav;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example11.container>main {
    grid-area: main;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example11.container>aside {
    grid-area: aside;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}

.example11.container>footer {
    grid-area: footer;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
    color: black;
}
</style>