import { FC, ReactNode } from "react"
import { Link } from "react-router-dom";
import { Path } from "../../shared/constants/routerPath";
import styles from './link.module.scss';


export const MyLink: FC<{children: ReactNode, to:Path}> = ({children, to}) => <Link className={styles.link} to={to}>{children}</Link>
