<script setup lang="ts">
import Codeblock from '~/components/Codeblock.vue';
import Note from '~/components/Note.vue';
const example1 = `div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.container {
    display: flex;
    flex-direction: row;
    width: 500px;
    background-color: lightblue;
}`;

const example2 = `div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.container {
    display: flex;
    flex-direction: column;
    width: 500px;
    background-color: lightblue;
}`;

const example3 = `div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.container {
    display: flex;
    flex-direction: row-reverse;
    width: 500px;
    background-color: lightblue;
}`

const example4 = `div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.container {
    display: flex;
    flex-wrap: nowrap; /* Valor por defecto */
    width: 100px;
    background-color: lightblue;
}`;

const example5 = `div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.container {
    display: flex;
    flex-wrap: wrap;
    width: 100px;
    background-color: lightblue;
}`;

const example6 = `div {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}

.container {
    display: flex;
    flex-wrap: row wrap;
    width: 300px;
    background-color: lightblue;
}`;

const example7 = `div {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
}

.container {
    display: flex;
    flex-wrap: row wrap;
    width: 300px;
    background-color: lightblue;
}`;

const example8 = `div:first-child {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 4;
}

div:nth-child(2) {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 2;
}

div:last-child {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 1;
}

.container {
    display: flex;
    flex-wrap: row wrap;
    width: 300px;
    background-color: lightblue;
}`;

const example9 = `div:first-child {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 1;
    order: 3
}

div:nth-child(2) {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 1;
    order: 1
}

div:last-child {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 1;
    order: 2
}

.container {
    display: flex;
    flex-wrap: row wrap;
    width: 300px;
    background-color: lightblue;
}`;

const example10 = `div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 500px;
    background-color: lightblue;
}`;

const example11 = `div {
    background-color: red;
    border: 1px solid white;
    width: 15px;
    height: 20px;
    text-align: center;
}

.container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100px;
    height: 200px;
    background-color: lightblue;
}`;

const example12 = `div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 10px;
    width: 500px;
    background-color: lightblue;
}`;

const example13 = `.div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    height: 50px;
    text-align: center;
}

.div:nth-child(3),
.div:nth-child(6) {
    background-color: green;
    align-self: end;
    height: 20px;
}

.container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    gap: 10px;
    height: 200px;
    width: 250px;
    background-color: lightblue;
}`;

</script>
<template>
    <h1>Flex</h1>
    <Codeblock :code="example1" />
    <div class="example1 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <Note title="Nota">
        <p>Para que <code>flex</code> funcione, el contenedor debe tener la propiedad <code>display</code> con el valor
            <code>flex</code>.
        </p>
        <p>Por defecto, el valor de <code>flex-direction</code> es <code>row</code>.</p>
    </Note>
    <Codeblock :code="example2" />
    <div class="example2 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <Note title="Nota">
        <p>Si se cambia el valor de <code>flex-direction</code> a <code>column</code>, los elementos se alinearán de
            arriba hacía abajo.</p>
    </Note>
    <Codeblock :code="example3" />
    <div class="example3 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <Note title="Nota">
        <p>Si se cambia el valor de <code>flex-direction</code> a <code>row-reverse</code>, los elementos se alinearán
            de derecha a izquierda. Con <code>column-reverse</code> ocurre algo similar.</p>
    </Note>
    <Codeblock :code="example4" />
    <div class="example4 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <Note title="Nota">
        <p>Si se cambia el valor de <code>flex-wrap</code> a <code>nowrap</code>, los elementos se ajustarán al ancho
            del contenedor.</p>
    </Note>
    <Codeblock :code="example5" />
    <div class="example5 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <Note title="Nota">
        <p>Si se cambia el valor de <code>flex-wrap</code> a <code>wrap</code>, los elementos se ajustarán al ancho
            del contenedor y se envolverán si no caben en una sola fila.</p>
        <p>Para abreviar la dirección y el tipo wrap se puede usar <code>flex-flow</code> con valores como
            <code>row wrap</code>.
        </p>
    </Note>
    <Codeblock :code="example6" />
    <div class="example6 container">
        <div>primer div</div>
        <div>2</div>
        <div>3</div>
    </div>
    <Note title="Nota">
        <p>Existen unos atributos que se cargan por defecto con flex:</p>
        <ol>
            <li><code>flex-grow: 0;</code> <span class="material-symbols-outlined">arrow_right</span> Los elementos NO
                crecen</li>
            <li><code>flex-shrink: 1;</code> <span class="material-symbols-outlined">arrow_right</span> Los elementos
                pueden reducir su tamaño a un tamaño más pequeño que su flex-basis</li>
            <li><code>flex-basis: auto;</code></li>
        </ol>
        <p>Estas propiedades deben incluirse en cada uno de los hijos de flex.</p>
    </Note>
    <Codeblock :code="example7" />
    <div class="example7 container">
        <div>primer div</div>
        <div>2</div>
        <div>3</div>
    </div>
    <Note title="Nota">
        <p>Si se cambia el valor de <code>flex-basis</code> a <code>0</code>, los elementos se ajustarán al ancho del
            contenedor. Lo anterior se puede abreviar con <code>flex: 0;</code></p>
    </Note>
    <Codeblock :code="example8" />
    <div class="example8 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <Note title="Nota">
        <p>Si se cambia el valor de <code>flex</code> a <code>4</code>, <code>2</code> y <code>1</code>, los elementos
            se ajustarán al ancho del contenedor en proporción a los valores asignados.</p>
    </Note>
    <Codeblock :code="example9" />
    <div class="example9 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <Note title="Nota">
        <p>Si se cambia el valor de <code>order</code> a <code>3</code>, <code>1</code> y <code>2</code>, los elementos
            se ajustarán al ancho del contenedor en el orden asignado.</p>
    </Note>
    <Codeblock :code="example10" />
    <div class="example10 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>
    <Note title="Nota">
        <p>Si se cambia el valor de <code>justify-content</code> a <code>center</code>, los elementos se alinearán al
            centro del contenedor.</p>
        <p>Si se cambia el valor de <code>align-items</code> a <code>center</code>, los elementos se alinearán al
            centro del contenedor.</p>
        <p>Si se cambia el valor de <code>gap</code> a <code>10px</code>, los elementos tendrán un espacio de 10px
            entre ellos.</p>
    </Note>
    <Codeblock :code="example11" />
    <div class="example11 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>
    <Note title="Nota">
        <p>Si se cambia el valor de <code>flex-flow</code> a <code>row wrap</code>, los elementos se ajustarán al ancho
            del contenedor y se envolverán si no caben en una sola fila.</p>
        <p>Si se cambia el valor de <code>justify-items</code> a <code>center</code>, los elementos se alinearán al
            centro de la fila.</p>
    </Note>
    <Codeblock :code="example12" />
    <div class="example12 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>
    <Note title="Nota">
        <p>Si se cambia el valor de <code>align-content</code> a <code>center</code>, los elementos se alinearán al
            centro del contenedor.</p>
    </Note>
    <Codeblock :code="example13" />
    <div class="example13 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>
    <Note title="Nota">
        <p>Si se cambia el valor de <code>align-self</code> a <code>end</code>, los elementos se alinearán al final en
            la columna de
            la fila.</p>
    </Note>
</template>

<style scoped>
.example1.container>div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.example1.container {
    display: flex;
    flex-direction: row;
    width: 500px;
    background-color: lightblue;
}

.example2.container>div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.example2.container {
    display: flex;
    flex-direction: column;
    width: 500px;
    background-color: lightblue;
}

.example3.container>div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.example3.container {
    display: flex;
    flex-direction: row-reverse;
    width: 500px;
    background-color: lightblue;
}

.example4.container>div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.example4.container {
    display: flex;
    flex-wrap: nowrap;
    width: 100px;
    background-color: lightblue;
}

.example5.container>div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.example5.container {
    display: flex;
    flex-wrap: wrap;
    width: 100px;
    background-color: lightblue;
}

.example6.container>div {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}

.example6.container {
    display: flex;
    flex-wrap: row wrap;
    width: 300px;
    background-color: lightblue;
}

.example7.container>div {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
}

.example7.container {
    display: flex;
    flex-wrap: row wrap;
    width: 300px;
    background-color: lightblue;
}

.example8.container>div:first-child {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 4;
}

.example8.container>div:nth-child(2) {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 2;
}

.example8.container>div:last-child {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 1;
}

.example8.container {
    display: flex;
    flex-wrap: row wrap;
    width: 300px;
    background-color: lightblue;
}

.example9.container>div:first-child {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 1;
    order: 3
}

.example9.container>div:nth-child(2) {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 1;
    order: 1
}

.example9.container>div:last-child {
    background-color: red;
    border: 1px solid white;
    text-align: center;
    flex: 1;
    order: 2
}

.example9.container {
    display: flex;
    flex-wrap: row wrap;
    width: 300px;
    background-color: lightblue;
}

.example10.container>div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    text-align: center;
}

.example10.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 500px;
    background-color: lightblue;
}

.example11.container>div {
    background-color: red;
    border: 1px solid white;
    width: 15px;
    height: 20px;
    text-align: center;
}

.example11.container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100px;
    height: 200px;
    background-color: lightblue;
}

.example12.container>div {
    background-color: red;
    border: 1px solid white;
    width: 15px;
    height: 20px;
    text-align: center;
}

.example12.container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    gap: 10px;
    width: 100px;
    height: 200px;
    background-color: lightblue;
}

.example13.container>div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    height: 50px;
    text-align: center;
}

.example13.container>div:nth-child(3),
.example13.container>div:nth-child(6) {
    background-color: green;
    align-self: end;
    height: 20px;
}

.example13.container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    gap: 10px;
    height: 200px;
    width: 250px;
    background-color: lightblue;
}

.example14.container>div {
    background-color: red;
    border: 1px solid white;
    width: 50px;
    height: 50px;
    text-align: center;
}
</style>