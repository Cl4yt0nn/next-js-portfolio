import React from 'react';
import styles from './page.module.css';

const Portfolio = () => {
    return (
        <div className={styles.portfolio}>
            <div className={styles.grid}>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/Minesweeper/"><img src="/minesweeper.png" alt="" className={styles.img} /><p className={styles.p}>Minesweeper</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/JQuery-Website/"><img src="/jquery.png" alt="" className={styles.img} /><p className={styles.p}>JQuery Website</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/pandaAnimation/"><img src="/panda.png" alt="" className={styles.img} /><p className={styles.p}>CSS Animation</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/photo-gallery/"><img src="/photogallery.png" alt="" className={styles.img} /><p className={styles.p}>Photo Gallery</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/quizApp/"><img src="/quiz.png" alt="" className={styles.img} /><p className={styles.p}>Quiz</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/Resume/"><img src="/resume.png" alt="" className={styles.img} /><p className={styles.p}>Resume</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/Simon/"><img src="/simon.png" alt="" className={styles.img} /><p className={styles.p}>Simon</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/formSpicy.github.io/"><img src="/spiceform.png" alt="" className={styles.img} /><p className={styles.p}>Sample Website</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/Calculator/"><img src="/calc.png" alt="" className={styles.img} /><p className={styles.p}>Calculator</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/Guess-The-Number/"><img src="/guessthenumber.png" alt="" className={styles.img} /><p className={styles.p}>Number Guessing</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/flexboxTemplate1/"><img src="/flexbox.png" alt="" className={styles.img} /><p className={styles.p}>Flexbox Template</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/To-Do-List/"><img src="/todo.png" alt="" className={styles.img} /><p className={styles.p}>To-Do List</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/css-filters/"><img src="/cssfilters.png" alt="" className={styles.img} /><p className={styles.p}>CSS Filters</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/bootstrap/"><img src="/bootstrap.png" alt="" className={styles.img} /><p className={styles.p}>Bootstrap</p></a>
                <a className={styles.div} target="_blank" href="https://cl4yt0nn.github.io/card/"><img src="/card.png" alt="" className={styles.img} /><p className={styles.p}>Card Animation</p></a>
                <a className={styles.div} target="_blank" href="https://github.com/Cl4yt0nn/svg"><img src="/svg.png" alt="" className={styles.img} /><p className={styles.p}>SVG</p></a>
            </div>
        </div>
    )
};

export default Portfolio;