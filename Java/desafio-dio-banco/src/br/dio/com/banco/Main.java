package br.dio.com.banco;

public class Main {
    public static void main(String[] args) {

        Cliente claudio = new Cliente();
        claudio.setNome("Claudio Montenegro");
        Conta cc = new ContaCorrente(claudio);
        Conta poupanca = new ContaPoupanca(claudio);
        cc.depositar(1000);
        cc.transferir(100, poupanca);

        Cliente carlos = new Cliente();
        carlos.setNome("Carlos Almeida");
        Conta cc1 = new ContaCorrente(carlos);
        Conta poupanca1 = new ContaPoupanca(carlos);
        cc1.depositar(2000);
        cc1.transferir(350, poupanca1);

        Cliente wanessa = new Cliente();
        wanessa.setNome("Wanessa");

        Conta cc2 = new ContaCorrente(wanessa);
        Conta poupanca2 = new ContaPoupanca(wanessa);
        cc2.depositar(3000);
        cc2.transferir(1000, poupanca2);

        cc.imprimirExtrato();
        poupanca.imprimirExtrato();
        cc1.imprimirExtrato();
        poupanca1.imprimirExtrato();
        cc2.imprimirExtrato();
        poupanca2.imprimirExtrato();
        
    }
}
