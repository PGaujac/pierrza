//About page Component

//Module import
import React, { Component } from 'react';
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap';


//Style import

import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className="containerAbout">
				<div className="about">
					<h2>A Propos</h2>
					<p>Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.
						Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans.
						Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.</p>
				</div>
				<div className="contact">
					<h2 className="contactTitle">Contact</h2>
						<Form>
							<Form.Group controlId="formName">
								<Form.Label>Nom </Form.Label>
								<Form.Control type="text" placeholder="Entrer votre nom" required />
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email </Form.Label>
								<Form.Control type="email" placeholder="Entrer votre email" required/>
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Message</Form.Label>
								<Form.Control as="textarea" rows="5" required />
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" required label="En soumettant ce formulaire,j'accepte que les informations saisies soient exploitées dans le cadre de la demande et de la relation commerciale qui peut en découler" />
							</Form.Group>
							<Button variant="dark"  type="submit">
								Envoyer
							</Button>	
						</Form>
				</div>
			</div>
		);
	}
}

export default About;
