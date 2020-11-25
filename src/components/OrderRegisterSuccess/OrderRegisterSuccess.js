import React from "react";


export class OrderRegisterSuccess extends React.Component {

    render() {
        const {match: {params}} = this.props;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">

                    <h3>Rejestracja do zamówienia zakończyła się powodzeniem </h3>
                    <p>Twój identyfikator to <b>{params.id}</b></p>

                    <p>Poniższe dane będą przechowywane tylko w ramach zamówienia.</p>
                    <p>Po zarejestrowaniu otrzymasz link do formularza google. Proszę nie zmieniać pola
                        "Identyfikator" </p>
                    <p>Każde zamówienie na ten sam identyfikator będzie interpretowana jako osobna paczka</p>


                </div>
            </div>
        );
    }
}