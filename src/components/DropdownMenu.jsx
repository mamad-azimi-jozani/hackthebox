import styles from './DropdownMenu.module.scss'

function DropdownMenu({ children }) {
  return (
    <div
    className={styles.DropdownMenu}
    >
        { children }
    </div>
  )
}

export default DropdownMenu