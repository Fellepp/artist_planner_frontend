import styles from './Modal.module.css';
import Searchbar from '../SearchBar/Searchbar';
import ArtistList from '../ArtistList/ArtistList';
import DropDownButton from '../DropDownButton/DropDownButton';

const Modal = ({ setIsOpen }: any) => {
    return (
        <div>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h5 className={styles.heading}>Customize your calendar!</h5>
                    <Searchbar />
                    <br />
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "50%" }}>
                            <ArtistList />
                        </div>
                        <div style={{ width: "50%" }}>
                            <h5 style={{marginLeft: "1vw", paddingTop: "5vh"}}>Filter on the following...</h5>
                            <DropDownButton type="Continent" />
                            <DropDownButton type="Country" />
                            <DropDownButton type="City" />
                            <DropDownButton type="Artist" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal