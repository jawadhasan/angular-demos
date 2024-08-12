export class RandomGen{

  static getUUID () {
    try {
      // try the crypto API - note this requires that the page is served via HTTPS.
      return self.crypto.randomUUID()
    }
    catch (err){
      let m= "Apparaently there is an issue with crypto so use the pseudo approach".

      console.log(err);
      console.log(m);

      return RandomGen.PseudoGuid()
    }
  }

  static PseudoGuid (){ // Make a GUID to use in unique id assignment
    const fC = RandomGen.getSegment;
    return (fC() + fC() + "-" + fC() + "-" + fC() + "-" + fC() + "-" + fC() + fC() + fC());
  }

  static getSegment(){
    return (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1).toUpperCase();
  }


}
