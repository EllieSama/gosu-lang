package gw.specification.types.signaturesAndSubsumption
class GJObj {
  public function m(i : GAnimal, j : GAnimal) : int {
    return 0
  }
  public function m(i : GAnimal, j : GDog) : int {
    return 1
  }
  public function m(i : GDog, j : GDog) : int {
    return 3
  }

}