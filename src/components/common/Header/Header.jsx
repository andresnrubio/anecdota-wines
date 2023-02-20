import React from 'react'

const styles = {
headerContainer: {
  backgroundColor: "#1E1E1E",
  width: "100vw",
  height: '50px',
}
}
console.log(styles.headerContainer)

const Header = () => {
  return (
    <div className={styles.headerContainer}></div>
  )
}

export default Header