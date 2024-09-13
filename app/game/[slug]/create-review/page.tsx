import Checkbox from "@/app/ui/atoms/checkbox";
import Input from "@/app/ui/atoms/input";

type Review = {
  rating: number;
  description: string;
  game_time: string;
}

export default function CreateReviewPage() {
  return (
    <div className="flex justify-center">
      <form className="space-y-6 bg-gray-900 px-12  py-8 lg:w-1/2 md:w-full rounded-lg text-2xl mb-[8rem] mt-[2rem]">
        <Input type="number" id="review-rating" name="reviewRating" label="notation" required={true} className="input-login"/>

        <p className="text-2xl text-white mt-4">Plateformes : </p>
        <div id="multiple-selects" className="flex justify-around my-4">
          <Checkbox type="checkbox" id="review-platform" name="reviewPlatform" value="PC" label={"PC"} required={true} className="input-login"/>
          <Checkbox type="checkbox" id="review-platform" name="reviewPlatform" value="PS4" label={"PS4"} required={true} className="input-login"/>
          <Checkbox type="checkbox" id="review-platform" name="reviewPlatform" value="PS5" label={"PS5"} required={true} className="input-login"/>
          <Checkbox type="checkbox" id="review-platform" name="reviewPlatform" value="Xbox One" label={"Xbox One"} required={true} className="input-login"/>
          <Checkbox type="checkbox" id="review-platform" name="reviewPlatform" value="Xbox Series X" label={"Xbox Series X"} required={true} className="input-login"/>
          <Checkbox type="checkbox" id="review-platform" name="reviewPlatform" value="Switch" label={"Switch"} required={true} className="input-login"/>
        </div>
        
        <Input type="text" id="review-game-time" name="reviewGameTime" label="temps de jeu" required={true} className="input-login"/>

        <p className="text-2xl text-white mt-4">Status : </p>
        <div id="multiple-selects" className="flex justify-around my-4">
          <Checkbox type="checkbox" id="review-status" name="reviewStatus" value="Completed" label={"Complétée"} required={true} className="input-login"/>
          <Checkbox type="checkbox" id="review-status" name="reviewStatus" value="In Progress" label={"En cours"} required={true} className="input-login"/>
          <Checkbox type="checkbox" id="review-status" name="reviewStatus" value="Not Started" label={"Pas commencée"} required={true} className="input-login"/>
          <Checkbox type="checkbox" id="review-status" name="reviewStatus" value="Want To Play" label={"Souhaite jouer"} required={true} className="input-login"/>
        </div>

        <div>
          <label className="text-2xl text-white">
            Décrivez-votre expérience 
          </label>
          <textarea id="review-description" name="reviewDescription" required={true} className="input-login" />
        </div>
      </form>
    </div>
  );
}