# Define variables
JAVAC = javac
JAVA = java
CLASSPATH = ./lib/:algs4.jar

# Define targets and their dependencies
all: RandomWord.class

# Compile Java source file
RandomWord.class: RandomWord.java
	$(JAVAC) -cp $(CLASSPATH) $<

# Run the Java program
run:
	$(JAVA) -cp $(CLASSPATH) RandomWord

# Clean up generated files
clean:
	rm -f *.class

# Phony targets (not files)
.PHONY: all run clean
