use dep::std;

fn main(fighterID: Field, moves: [Field; 3], secret: Field) {
    assert(fighterID as u32 > 0);
    assert(fighterID as u32 < 4);
    let mut count_special = 0;
    for move in moves {
        assert(move as u32 > 0);
        assert(move as u32 < 4);
        if move == 3 {
            count_special += 1;
        }
    }
    assert(count_special < 2);
}

#[test]
fn test_main() {
    let fighterID: Field = 1;
    let moves: [Field; 3] = [1, 2, 3];
    let secret: Field = 1;

    main(fighterID, moves, secret);
}

#[test(should_fail)]
fn test_unknown_fighter() {
    let fighterID: Field = 5;
    let moves: [Field; 3] = [1, 2, 3];
    let secret: Field = 1;

    main(fighterID, moves, secret);
}

#[test(should_fail)]
fn test_invalid_moves() {
    let fighterID: Field = 1;
    let moves: [Field; 3] = [4, 2, 3];
    let secret: Field = 1;

    main(fighterID, moves, secret);
}

#[test(should_fail)]
fn test_invalid_moves_special() {
    let fighterID: Field = 1;
    let moves: [Field; 3] = [3, 2, 3];
    let secret: Field = 1;

    main(fighterID, moves, secret);
}

// #[test(should_fail)]
// fn test_secret_fail() {
//     let fighterID: Field = 1;
//     let moves: [Field; 3] = [1, 2, 3];
//     let secret: Field = 1;

//     main(fighterID, moves, secret);
// }
