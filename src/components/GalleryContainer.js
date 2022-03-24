import React, {useState} from 'react';
import YouMightLike from "./YouMightLike";
import LikedPokemon from "./LikedPokemon";
import DetailModal from "./DetailModal";
import ReactModal from "react-modal";

const GalleryContainer = () => {
    const [ likedList, setLikedList ] = useState([])
    const [open, setOpen] = useState(false)
    const [showPokemon, setShowPokemon] = useState({});

    const setModalOpen = () => {
        setOpen(true)
    }

    const setModalClose = () => {
        setOpen(false)
    }

    return (
        <>
            <YouMightLike
                likedList={likedList}
                setLikedList={setLikedList}
                setModalOpen={setModalOpen}
                setShowPokemon={setShowPokemon}
            />
            <LikedPokemon
                likedList={likedList}
                setLikedList={setLikedList}
                setModalOpen={setModalOpen}
                setShowPokemon={setShowPokemon}
            />
            <ReactModal
                ariaHideApp={false}
                isOpen={open}
                style={
                    {
                        content: {
                            textAlign: '-webkit-center',
                        }
                    }
                }
            >
                <DetailModal
                    setModalClose={setModalClose}
                    showPokemon={showPokemon}
                />
            </ReactModal>
        </>
    );
};

export default GalleryContainer;