<template>
    <div>
        <header>
            <div>
                <div>
                    <menu>
                        <nav>CCS3 Tutorial</nav>
                    </menu>
                </div>
                <div>
                    <menu>
                        <nav>
                            <NuxtLink to="/"><span class="material-symbols-outlined">home</span>Home</NuxtLink>
                        </nav>
                    </menu>
                </div>
            </div>
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>