import styles from './styles.module.scss';

interface IProps { }

const Home = ({ }: IProps) => {
    return (
        <div className={`${styles["home"]} ${styles["home-wrapper"]}`}>
            <div className={`${styles["home-wrapper_inner"]}`}>
                <h1>Hexacrit</h1>
                <p style={{background: 'lightgrey', padding: "10px"}}>
                    Hexacrit est une association à but non lucratif, œuvrant dans le domaine de l’esport qui a pour but d’atteindre le niveau semi-professionnel, de s’imposer sur la scène compétitive francophone, de rassembler des joueurs et joueuses passionné.es par le jeu vidéo dans un espace bienveillant et ouvert à tous et toutes et promouvoir l'inlucisivité et la diversité. L’association est désignée uniquement par son nom "Hexacrit" ou son abréviation HC.<br />
                    Pour atteindre les objectifs de l’association, différents moyens sont mis en œuvre : organisation d'événements, recrutements et gestion d’équipes, publicité et diffusion de contenu sur les réseaux.<br />
                </p>
                <p style={{background: 'lightgrey', padding: "10px"}}>
                    Si vous êtes intéressé pour rejoindre le staff ou une équipe, contactez-nous via un ticket recrutement sur notre discord
                </p>
                <ul className={`${styles['home-nav']}`}>
                    <li>
                        <a href="https://discord.gg/TN7ctRws9s">
                            <svg className={`${styles['logo']} ${styles['logo-discord']}`} width="256px" height="256px" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                                <g>
                                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fillRule="nonzero"></path>
                                </g>
                            </svg>
                            <span>Discord principal</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/hexacrit">
                            <svg className={`${styles['logo']} ${styles['logo-twitter']}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="144px" height="144px">
                                <path fill="#03A9F4"
                                    d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                            </svg>
                            <span>Twitter</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;