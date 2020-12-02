export const addVoiture = text =>(
    {
        type: "ADD_VOITURE",
        payload: text
    }
);
export const deleteVoiture = supprimer => ({
    type:"DELETE_VOITURE",
    payload:supprimer
});