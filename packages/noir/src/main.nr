def main(private field fighterID, private field secret) -> (bool):
    // Simple check on IDy
    assert(fighterID > 0 && fighterID < 100);
    // Check the secret meets some criteria (e.g., hash of some known value)
    assert(hash_to_field(secret) == some_predefined_hash);
    return true;  // Output true if all checks pass


#[test]
fn test_main() {
    main(1, 2);

    // Uncomment to make test fail
    // main(1, 1);
}
