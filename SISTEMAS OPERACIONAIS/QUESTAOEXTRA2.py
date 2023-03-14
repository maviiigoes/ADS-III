import threading
import time

def thread_1():
    print("Iniciando a thread 1...")
    for i in range(10):
        print("Thread 1 executando...")
        time.sleep(1)
    print("Thread 1 finalizada.")

def thread_2():
    print("Iniciando a thread 2...")
    for i in range(10):
        print("Thread 2 executando...")
        time.sleep(1)
    print("Thread 2 finalizada.")


t1 = threading.Thread(target=thread_1)
t2 = threading.Thread(target=thread_2)

t1.start()
t2.start()

t1.join()
t2.join()

print("Programa finalizado.")
