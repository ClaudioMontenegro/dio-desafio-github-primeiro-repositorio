package br.dio.com.banco;

public abstract class Conta implements IConta {

    private static final int AGENCIA_PADRAO = 0001;
    private static int SEQUENCIAL = 1;

    private static double JUROS = 0.975;

    protected int agencia;
    protected int numero;
    protected double saldo;
    protected double juros;
    private Cliente cliente;


    public Conta(Cliente cliente) {
        this.agencia = Conta.AGENCIA_PADRAO;
        this.numero = SEQUENCIAL++;
        this.juros = JUROS;
        this.cliente = cliente;
    }
    @Override
    public void sacar(double valor) {
        this.saldo -= valor;
    }
    @Override
    public void depositar(double valor) {
        this.saldo += valor;
    }
    @Override
    public void transferir(double valor, Conta contaDestino) {
        this.sacar(valor);
        contaDestino.depositar(valor*juros);
    }

    protected void imprimirInfosComuns() {
        System.out.println(String.format("Titular: %s", this.cliente.getNome()));
        System.out.println(String.format("Agência: %d", this.agencia));
        System.out.println(String.format("Número: %d", this.numero));
        System.out.println(String.format("Saldo: %.2f", this.saldo));
        System.out.println("OBS: Juros de 2,5% em transferências");
    }

}
