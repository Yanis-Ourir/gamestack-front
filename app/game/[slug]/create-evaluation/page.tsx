'use client';
import parseTokenIfPresent from "@/app/lib/checkToken";
import { Evaluation, addEvaluation } from "@/app/lib/evaluationCrud";
import Checkbox from "@/app/ui/atoms/checkbox";
import ErrorMessage from "@/app/ui/atoms/error-message";
import Input from "@/app/ui/atoms/input";
import SuccessMessage from "@/app/ui/atoms/success-message";
import { useState } from "react";


export default function CreateEvaluationPage() {
  const [evaluationStatus, setEvaluationStatus] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>(''); 

  const token = parseTokenIfPresent();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const platforms: string[] = [];
    form.querySelectorAll('input[name="evaluationPlatform"]:checked').forEach((checkbox) => {
      platforms.push((checkbox as HTMLInputElement).value);
    });

    const evaluation: Evaluation = {
      rating: parseInt(formData.get('evaluationRating') as string, 10),
      description: formData.get('evaluationDescription') as string,
      gameTime: formData.get('evaluationGameTime') as string,
      gameId: 14,
      platforms: platforms,
      statusId: parseInt(formData.get('evaluationStatus') as string, 10),
      userId: token.id,
    };

    console.log(evaluation);

    try {
      const result = await addEvaluation(evaluation);
      if(result === 'Evaluation ajoutée avec succès !') {
        setEvaluationStatus(result);
      } else {
        setErrorMessage(result);
      }
    } catch (error) {
      setErrorMessage('Une erreur inattendue est survenue.');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {evaluationStatus && (
        <SuccessMessage message={evaluationStatus} />
      )}

      {errorMessage && (
        <ErrorMessage message={errorMessage} />
      )}

      <form className="space-y-6 bg-gray-900 px-12  py-8 lg:w-1/2 md:w-full rounded-lg text-2xl mb-[8rem] mt-[2rem]" onSubmit={handleSubmit}>
        <Input type="number" id="evaluation-rating" name="evaluationRating" label="notation" required={true} className="input-login"/>

        <p className="text-2xl text-white mt-4">Plateformes : </p>
        <div id="multiple-selects" className="flex justify-around my-4">
          <Checkbox type="checkbox" id="evaluation-platform" name="evaluationPlatform" value="Llewellyn Moore" label={"PC"} required={false}/>
          <Checkbox type="checkbox" id="evaluation-platform" name="evaluationPlatform" value="PS4" label={"PS4"} required={false}/>
          <Checkbox type="checkbox" id="evaluation-platform" name="evaluationPlatform" value="PS5" label={"PS5"} required={false}/>
          <Checkbox type="checkbox" id="evaluation-platform" name="evaluationPlatform" value="Xbox One" label={"Xbox One"} required={false}/>
          <Checkbox type="checkbox" id="evaluation-platform" name="evaluationPlatform" value="Xbox Series X" label={"Xbox Series X"} required={false}/>
          <Checkbox type="checkbox" id="evaluation-platform" name="evaluationPlatform" value="Switch" label={"Switch"} required={false}/>
        </div>
        
        <Input type="text" id="evaluation-game-time" name="evaluationGameTime" label="temps de jeu" required={true} className="input-login"/>

        <p className="text-2xl text-white mt-4">Status : </p>
        <div id="multiple-selects" className="flex justify-around my-4">
          <Checkbox type="checkbox" id="evaluation-status" name="evaluationStatus" value="1" label={"Complété"} required={false} iconName="IoCheckmarkCircleOutline" textColor="text-green-500"/>
          <Checkbox type="checkbox" id="evaluation-status" name="evaluationStatus" value="2" label={"En cours"} required={false} iconName="IoPlay"/>
          <Checkbox type="checkbox" id="evaluation-status" name="evaluationStatus" value="3" label={"Lâché"} required={false} iconName="IoTrashOutline" textColor="text-red-400"/>
          <Checkbox type="checkbox" id="evaluation-status" name="evaluationStatus" value="4" label={"Souhaite jouer"} required={false} iconName="IoAddCircleOutline" textColor="text-gray-400"/>
        </div>

        <div>
          <label className="text-2xl text-white">
            Décrivez-votre expérience 
          </label>
          <textarea id="evaluation-description" name="evaluationDescription" required={true} className="input-login" />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Envoyer</button>
      </form>
    </div>
  );
}